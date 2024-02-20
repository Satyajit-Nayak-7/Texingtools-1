import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick =()=>{
        // console.log("Button was clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoclick =()=>{
        // console.log("Button was clicked")
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleInvclick =()=>{
        const stringArray = text.split("");
        const stringReverse = stringArray.reverse();
        const stringJoin = stringReverse.join("");
        // console.log(stringJoin);
        setText(stringJoin);
    }

    const handleCopyclick =()=>{
        navigator.clipboard.writeText(text);
    }

    const handleRemovespacesclick =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleClearclick =()=>{
        let newText = '';
        setText(newText);
    }

    const handleOnclick =(event)=>{
        // console.log("Button");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    
  return (
    <>
      <div className="container"style={{color:props.mode=== 'dark'?'white':'#08234a'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnclick} style={{backgroundColor:props.mode=== 'dark'?'grey':'white',color:props.mode==='dark'?'white':'#08234a'}} id="myText" rows="8"></textarea>
    </div>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInvclick}>Inverse the text</button>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyclick}>Copy text</button>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemovespacesclick}>Remove extra spaces </button>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear text</button>
    </div>

    <div className="contianer my-3"style={{color:props.mode=== 'dark'?'white':'#08234a'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{
            return element.length!==0;
        }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{
            return element.length!==0;
        }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
    </>
  )
  
}
