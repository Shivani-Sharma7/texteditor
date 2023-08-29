import React, {useState} from 'react'
//hooks help in using functionlity of classes without using classes
//useState is a hook
//react cannot update normal variables, so we use states.
export default function TextForm(props) {
  //props accepts the attributes sent from App.js file 

  //event listener functions
  const handleUpClick = () => {
    // console.log("Uppercase was clicked!!!" + text)
    let newText=text.toUpperCase();
    setText(newText);
  }


  const handleLowClick = () => {
    // console.log("Uppercase was clicked!!!" + text)
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    let newText='';
    setText(newText);
  }

  //we always get an event listener whenever we apply any event
  const handleOnChange = (event) => {
    console.log("On change!!!")
    //event.target.value returns the value entered by the user when entering in the textbox
    setText(event.target.value);
  }

  const handleExtraSpaces = (event) => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleCopyClick = (event) => {
    console.log(event);
  }

  //initialization of state variables where text is the variable & setText is the function which will update the value of text var.
  const [text,setText]=useState('');

  // text='text2'; //wrong way to change the state
  // setText("New text here");//correct way to update the value in text variable 
  //textarea need onchange bcz we are using state variable in the value. so if anyone change the value then w have to update the state variable

  //{props.heading} is the way to access the attributes passed from app.js & received in props variable.
  //onChange={handleOnChange} is the way to call for any event listener
  return (
    <>
      <div className='container'>
          <div className="mb-3">
              <h1>{props.heading} </h1>
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}/>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className='container my-3'>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words,{text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
