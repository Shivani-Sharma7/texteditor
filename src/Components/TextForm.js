import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    
    if (text!==''){
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Your content is capitalized!!!","success");
    } else {
      props.showAlert("No data available!!!","danger");
    }
  }


  const handleLowClick = () => {
    if (text!==''){
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Your content is now in lower case!!!","success");
    } else {
      props.showAlert("No data available!!!","danger");
    }
  }

  const handleClearClick = () => {
    if (text!==''){
      let newText='';
      setText(newText);
      props.showAlert("Your content is cleared!!!","success");
    } else {
      props.showAlert("No data available!!!","danger");
    }
  }

  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleExtraSpaces = (event) => {
    if (text!==''){
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces have been removed!!!","success");
    } else {
      props.showAlert("No data available!!!","danger");
    }
  }

  

  
  const [text,setText]=useState('');
  return (
    <>
      <div className='container' style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}>
          <div className="mb-3">
              <h1>{props.heading} </h1>
          <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black'}} rows="8" value={text} onChange={handleOnChange}/>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className='container my-3' style={{backgroundColor: props.mode === 'light'?'white':'grey'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words,{text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something to preview!!!'}</p>
      </div>
    </>
  )
}
