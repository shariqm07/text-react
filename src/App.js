import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert("Changes to light mode", 'success');
      document.title = 'TextTutils - Light Mode';
      setTimeout(() => {
        document.title = 'TextTutils - Install Now';
      }, 2000);
      setTimeout(() => {
        document.title = 'TextTutils - Amazing App';
      }, 1500);
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#6c757d';
      ShowAlert("Changes to dark mode", 'success');
      document.title = 'TextTutils - Dark Mode';
    }
  };

  return (
    <>
      <Navbar title="TextTutils" mode={mode} ToggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter your text" mode={mode} ShowAlert={ShowAlert} />
        {/* <About /> */}
      </div>
    </>
    // <>

    //   <Router>
    //     <Navbar title="TextUtils" mode={mode} ToggleMode={toggleMode} />
    //     <Alert alert={alert} />
    //     <div className="container ">
    //       <Routes>
    //         <Route exat path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} ShowAlert={ShowAlert} />} />
    //         <Route exact path="/about" element={<About mode={mode} />} />
    //       </Routes>
    //     </div>
    //   </Router>
    // </>
  );
}

export default App;
