import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercaase", "success");
  };
  const handleloClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercaase", "success");
  };
  const handlelclearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  // console.log("On Change");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // Copy text
  const handlecopy = () => {
    // console.log('i am copy');
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()  
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container mb-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button disabled={ text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
               
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>
          Convert to Lowercase
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={handlepoClick}>
          po
        </button> */}

        <button disabled={ text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelclearClick}>
          Clear Text
        </button>
        <button disabled={ text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>
          Copy Text
        </button>

        <button  disabled={ text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Clear Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chracters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview!"}
        </p>
      </div>

    
    </>
  );
}
