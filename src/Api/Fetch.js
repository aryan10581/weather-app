import React, {useState, useEffect} from 'react'
import './Fetch.css'
export default function Fetch(props) {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('');
  const [state, setState] = useState('delhi');
  
  // API KEY AND URL
  const apiKey = '8ad1091d9f3ee8ef0a0b7ccd593c41fd';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
  
  
  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);
  const inputHandler = (event) => {
    setGetState(event.target.value);
  };
  
  const submitHandler = () => {
    setState(getState);
  };
  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="App">
      
    <header className="welcome"style={{ backgroundColor: props.mode === `dark` ? `#001b31` : `white` , color: props.mode === `dark` ? `white` : `black` }}>
      <h2>Welcome to Weather App</h2>
    </header>
    <div className="container mystyle" style={{ backgroundColor: props.mode === `dark` ? `#001b31` : `white` , color: props.mode === `dark` ? `white` : `black` }}>
      <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
       
        <div className="form">
          <input
            type="text"
            id="location-name"
            className="form-control"
            onChange={inputHandler}
            value={getState}
            placeholder='Enter Location'
           
          />
        <button className="btn btn-success  mx-2 search"  onClick={submitHandler}>
          Search
        </button>
        </div>
      </div>

      <div className="card mt-3 mx-auto mystyle" style={{ backgroundColor: props.mode === `dark` ? `#042743` : `white` , color: props.mode === `dark` ? `white` : `black`, width:'60vw' }}>
        {apiData.main ? (
          <div className="card-body text-center mystyle" style={{ backgroundColor: props.mode === `dark` ? `#042743` : `white` , color: props.mode === `dark` ? `white` : `black` }}>
            <img
              src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />

            <p className="h2" style={{ backgroundColor: props.mode === `dark` ? `#042743` : `white` , color: props.mode === `dark` ? `white` : `black` }}>
              {kelvinToFarenheit(apiData.main.temp)}&deg; C
            </p>

            <p className="h5">
              <i className="fas fa-map-marker-alt"></i>{' '}
              <strong>{apiData.name}</strong>
            </p>

            <div className="row mt-4">
              <div className="col-md-6">
                <p>
                  <i className="fas fa-temperature-low "></i>{' '}
                  <strong>
                   Min: {(kelvinToFarenheit(apiData.main.temp_min))}&deg; C
                  </strong>
                </p>
                <p>
                  <i className="fas fa-temperature-high"></i>{' '}
                  <strong>
                   Max: {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                  </strong>
                </p>
                <p><strong>
                  Wind Speed:{apiData.wind.speed} Km/h
                  </strong></p>
                  <p>
                    <strong>Country: {apiData.sys.country}</strong>
                  </p>
              </div>
              <div className="col-md-6">
                <p>
                  {' '}
                  <strong>{apiData.weather[0].main}</strong>
                </p>
                <p>
                 <strong>Humidity:{apiData.main.humidity}%</strong>
                </p>
                <p>
                  <strong>Feels Like:{kelvinToFarenheit(apiData.main.feels_like)}&deg; C</strong>
                </p>
                <p>
                  <strong>
                    Pressure: {apiData.main.pressure} mbar
                  </strong>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='null' >

            <p>Enter the location to check the weather of your city</p>
          </div>
        )}
      </div>
    </div>

  </div>
  )
}
