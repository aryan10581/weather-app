import React, {useState} from 'react'
import Fetch from './Api/Fetch';
import './App.css';
import NavBar from './Components/NavBar';


function App() {

  const [mode, setmode] = useState(`light`);
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = `#001b31`;
     
    } else {
      setmode("light");
      document.body.style.backgroundColor = `white`;
     
    }
  };
  return (
    <div className="App">
     
      <NavBar mode={mode} toggleMode={toggleMode}/>
    <Fetch mode={mode}/>
    </div>
  );
}

export default App;
