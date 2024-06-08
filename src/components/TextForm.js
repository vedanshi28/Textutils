import React, {useState} from 'react'

export default function TextForm(props) {
  
const handleUpClick=()=>{
  //  console.log("UpperCase Button is clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","Success");
}
const handleLoClick=()=>{
  //  console.log("LowerCase Button is clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","Success");
}
const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces has been removed","Success");
  }
const handleClearClick=()=>{
    //  console.log("Clear Button is clicked"+ text);
    let newText='';
      setText(newText);
      props.showAlert("Text has been clear","Success");
  }
const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
}

    const [text , setText] = useState('');
    //setText("new text")
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='dark'?'white':'white',color:props.mode==='dark'?'black':'black'}} rows="8" placeholder='Enter your text here'></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
  <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
  <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#343434'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcters</p>
        <p>{0.008*text.split("").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  )
}
