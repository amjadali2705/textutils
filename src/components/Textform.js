import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handle = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared", "success");
    }
    const handleOnchange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy =()=>{ 
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space is removed", "success");
    } 
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  
</div>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handle}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
