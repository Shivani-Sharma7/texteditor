import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode= () => {
    if(mode === 'light') { 
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode is enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","success")
    }
  }
  return (
    <>
    
      <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} /> 
      <Alert alert={alert} mode={mode} />
      <div className='container my-3'>
            <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}  />
      </div>
    
    </>
  );
}

export default App;
