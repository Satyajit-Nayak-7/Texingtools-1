import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextForm';
import Alert from './components/Alert';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 const[mode, setMode] = useState('light');

 const[alert,setalert]=useState(null);

 const showalert=(message,type)=>{
  setalert({
    message:message,
    type:type
  })
   setTimeout(() => {
     setalert(null);
   }, 2000);
 }
 
 const toggleMode=()=>{
   if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor='#08234a';
     showalert("Dark mode has been enabled ","success");
   }
   else{
     setMode('light');
     document.body.style.backgroundColor='white';
     showalert("Light mode has been enabled ","success");
   }

  }
 
 
  return (
    <>
  <Router>
    <Navbar title = "TextUtils" about = "About TextUtils" mode={mode} toggleMode ={toggleMode} />
    <Alert alert={alert}/> 
    <div className= "container my-3">
      <Routes>
        {/* Use Exact path  to go proper directory */}
          <Route exact path="/about"                 
           element = {<About mode={mode}/>}>  
          </Route>
          <Route exact path="/home"
           element = { <TextFrom heading ="Enter the text to analyze" mode={mode}/>}>

           </Route>
      </Routes>
    </div>
  </Router>
    </>
  );
}

export default App;
