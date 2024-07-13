import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';


function App() {
  const[mode,setMode] = useState("light");   //weather dark mode is enable or not
  const[alert,setAlert] = useState(null);
  const Showalert = (message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
  }

  setTimeout(() => {
    setAlert(null);
  }, 3000);
  
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      Showalert("Dark mode has been enabled",'success');
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      Showalert("Night mode has been enabled",'success');
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className='container'>
    <TextForm heading = "Enter the text to analyze below" mode = {mode}/>
    </div>
    
    
    {/* <About/> */}
   
    </>
  );
}

export default App;

