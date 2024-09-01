import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import Alert from './Components/Alert';
import About from './Components/About';

import React, {useState} from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [button, setButton] = useState('success');

  const showAlert = (message, type) => {
    setAlert({ text: message,
               type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1a1b1c'; 
      document.body.style.color = 'rgb(179 175 175)';    
      setButton('primary');
      showAlert('Dark mode has been enabled','success');
    } else {
      setMode('light');  
      document.body.style.backgroundColor = 'white';   
      document.body.style.color = 'black';  
      setButton('success');
      showAlert('Light mode has been enabled','success');
    }
  }

  const router = createBrowserRouter([
    {
      path: "/about",
      element: (
      <>
        <Navbar siteName="TextUtils" dropdown="More" mode={mode} toggleMode={toggleMode} />
        <About mode={mode}/>
      </>
      )
    },
    {
      path: "/",
      element: (
        <>
          <Navbar siteName="TextUtils" dropdown="More" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container">
            <TextBox buttonStyle={button} showAlert={showAlert} />
          </div>
        </>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
