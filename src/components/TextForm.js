import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpacesClick = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            style={{
              backgroundColor: props.mode === 'dark' ? '#333' : 'white', 
              color: props.mode === 'dark' ? 'white' : 'black'
            }} 
            id="myBox" 
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} disabled={text.length === 0}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} disabled={text.length === 0}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick} disabled={text.length === 0}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpacesClick} disabled={text.length === 0}>Remove Extra Spaces</button>
      </div>

      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{(0.008 * (text.trim().split(/\s+/).length || 0)).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box above to preview it here"}</p>
      </div>
    </>
  );
}
