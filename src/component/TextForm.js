import React ,{useState} from "react"
// import PropTypes from 'prop-types';


export default function TextForm(props){
    const [text,setText] = useState(" "); //this is the value of text
    // here set text is a function use to update the value of text
    const handleUpClick = ()=>{
        console.log("the change to uppercase"+text);
        let newtext = text.toUpperCase();
        setText(newtext)  //after clicking on button text get converts to settext
    }
    const handleloClick = ()=>{
        console.log("the change to uppercase"+text);
        let newtext = text.toLowerCase();
        setText(newtext)  //after clicking on button text get converts to settext
    }
    const handleOnChange = (event)=>{
        console.log("handle on change");
        setText(event.target.value);   //after adding event and changing setText I am able to right in textarea
    }
    return(
        <>
            <div className="container" style ={{color:props.mode ==='dark'?'white' :'black'}}>
                <h1>{props.heading}</h1>
                    <div className ="mb-3">
                        <label htmlFor="myBox" className ="form-label"></label>
                        <textarea className ="form-control" value={text} style ={{backgroundColor:props.mode ==='dark'?'#042743' :'white'}} onChange={handleOnChange}  id="myBox" rows="5"></textarea>
                    </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleloClick} >Convert To Lowercase</button>
           </div>
           <div className= "container" style ={{color:props.mode ==='dark'?'white' :'black'}} >
               <h1> Your Text summary</h1>
               <p>{text.split(" ").length} words and {text.length} characters</p>
               <p>{ 0.008 * text.split(" ").length} Minutes read </p>
               <h2>Preview</h2>
               <p>{text}</p>
           </div>
        </>
        
    )
}
// 
// 
