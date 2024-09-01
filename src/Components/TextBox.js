import React, {useState} from 'react'

export default function TextBox(props) {
  const [text, setText] = useState('');

  const handleExtraSpace = () => {
    setText(text.replace(/\s+/g,' '));
    props.showAlert('Extra spaces removed','success');
  }
  const handleClear = () => {
    if(text === '')
      props.showAlert('No text to clear','danger');
    else{
      setText('');
      props.showAlert('Text Cleared','success');
    }
  }
  const handleCopy = () => {
    if(text === '' || text.trim().length === 0)
      props.showAlert('No text to copy','danger');
    else{
      navigator.clipboard.writeText(text);
      props.showAlert('Copied to Clipboard','success');
    }
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  const handleUpper = () => {
    if(text === '' || text.trim().length === 0)
      props.showAlert('No text to convert','danger');
    else{
      setText(text.toUpperCase());
      props.showAlert('Converted to Upper Case','success');
    }
    
  }

  const handleLower = () => {
    if(text === '' || text.trim().length === 0)
      props.showAlert('No text to convert','danger');
    else{
      setText(text.toLowerCase());
      props.showAlert('Converted to Lower Case','success');
    }
  }

  return (
    <div>
        <form>
              <div className="form-group">
              <textarea className="form-control my-4" placeholder='Enter Your Text' id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
    </form> 
    <button type="button" className={`btn btn-outline-${props.buttonStyle} mx-2`} onClick={handleUpper}>To Upper Case</button> 
    <button type="button" className={`btn btn-outline-${props.buttonStyle} mx-2`} onClick={handleLower}>To Lower Case</button> 
    <button type="button" className={`btn btn-outline-${props.buttonStyle} mx-2`} onClick={handleClear}>Clear Text</button>
    <button type="button" className={`btn btn-outline-${props.buttonStyle} mx-2`} onClick={handleCopy}>Copy To Clipboard</button> 
    <button type="button" className={`btn btn-outline-${props.buttonStyle} mx-2`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
    <div>
      <h4 className="my-2">Word Summary</h4>
      <p>{text === '' || text.trim().length === 0?0:text.split(' ').length} words and {text.split('').filter(char => /[a-zA-Z]/.test(char)).length} letters and {text.split('').filter(char => /[1-9]/.test(char)).length} numbers</p>
    </div>
    <div>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </div>
  )
}
