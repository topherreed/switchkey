import React, { useState } from 'react';
import Keyboard from "./components/Keyboard";
import Converter from "./Converter";


function App() {

  
  const [ selectedLanguage, setSelectedLanguage ] = useState("english");
  const [ characterCase, setCharacterCase ] = useState("lowercase");

  

  const typeFromButton = (character) => {
    // a job for future me
  }


  
  const handleKeyDown = (e) => {

    
    // Check if Shift was pressed to render uppercase keyboard
    if(e.which === 16) {
      setCharacterCase("uppercase");
    }

    if(e.which === 20) {
      alert("CapsLock not supported at this time");
    }

    // If it's not a character don't do anything else;
    if(e.key.length > 1 || e.which === 32) {
      return true
    }

    // Get corresponding key && block 'Shift', 'Enter', etc. (metakeys) from inserting when selectedLanguage set to 'english'
    if(selectedLanguage !== 'english') {


      // alert("hello");
      
      // Allow CMD + Key as normal
      if(e.metaKey) {
        return true;
      }
      // Determine if key was pressed in conjunction with 'Shift'
      if(e.shiftKey) {
        var newKey = Converter.convert(e.key, selectedLanguage, true)
      } else { 
        newKey = Converter.convert(e.key, selectedLanguage, false)
      }




      // Insert newKey into textarea after it has been converted, prevent nonexistent keys from being typed
      if(newKey) {

        const {selectionStart, selectionEnd, value} = e.target;
        const newText = value.slice(0, selectionStart) + (newKey || "") + value.slice(selectionEnd);
        e.target.value = newText;
        e.target.selectionStart = e.target.selectionEnd = selectionStart + 1;
        e.preventDefault();

      } else {
        e.preventDefault();
      }

    }
    

    
  }

  const handleKeyUp = (e) => {
    //Keep Keyboard Uppercase if button other than Shift is lifted
    if(e.which === 16) {
      setCharacterCase("lower");
    }
    
  }

  // Set Keyboard Language
  const handleClick = (e) => {
    const name = e.target.name;
    setSelectedLanguage(name);
    
  }

  const activeStyle = {
    backgroundColor: "slateblue"
  }
  const inactiveStyle = {

  }


  return (
    <div className="App">

      

      {/* Input Box */}
      <div>
        <textarea  
          className="inputBox" 
          rows="4" cols="30" 
          onKeyDown={handleKeyDown}
          onKeyUp={characterCase === 'uppercase' ? handleKeyUp : null}
        />
      </div>

      {/* Keyboard Language Selectors */}
      <div className="btn-group" role="group">
          <button style={selectedLanguage === 'english' ? activeStyle : inactiveStyle} onClick={handleClick} type="button" name="english"  className="langSelector btn btn-secondary">English</button>
          <button style={selectedLanguage === 'russian' ? activeStyle : inactiveStyle} onClick={handleClick} type="button" name="russian"  className="langSelector btn btn-secondary">Russian</button>
          <button style={selectedLanguage === 'georgian' ? activeStyle : inactiveStyle } onClick={handleClick} type="button" name="georgian" className="langSelector btn btn-secondary">Georgian</button>
          
      </div>

      {/* Keyboard */}
      <div>
        <Keyboard 
          insertCharacter={typeFromButton} 
          key={selectedLanguage} 
          keyboardLanguage={selectedLanguage}
          characterCase={characterCase === 'uppercase' ? 1 : 0}
          />
      </div>
     
    </div>
  );
}

export default App;
