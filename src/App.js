import React, { useState } from 'react';
import Keyboard from "./components/Keyboard";
import Converter from "./Converter";


function App() {

  const [ selectedLanguage, setSelectedLanguage ] = useState("english");

  const typeFromButton = (character) => {
    // working on it
  }

  // Match key to foreign keyboard equivalent
  // const switchKey = (lang, c) => {

  //   if(lang === 'georgian') {
  //       return georgianDict[c];
  //   } else if(lang === 'russian') {
  //       return russianDict[c];
  //   } else if(lang === 'thai') {
  //       return thaiDict[c];
  //   }

  // }

  
  const handleKeyPress = (e) => {

    const {selectionStart, selectionEnd, value} = e.target;

    const newText = value.slice(0, selectionStart) + Converter.convert(e.key, selectedLanguage) + value.slice(selectionEnd);
    e.target.value = newText;

    e.target.selectionStart = e.target.selectionEnd = selectionStart + 1;
  
    e.preventDefault();

  }

  // Set Keyboard
  const handleClick = (e) => {
    const name = e.target.name;
    setSelectedLanguage(name);

  }


  return (
    <div className="App">

      {/* Input Box */}
      <div>
        <textarea  
          className="inputBox" 
          rows="4" cols="40" 
          onKeyPress={selectedLanguage === 'english' ? null : handleKeyPress} 
        />
      </div>

      {/* Keyboard Selectors */}
      <div className="btn-group" role="group">
          <button onClick={handleClick} type="button" name="english"  className="langSelector btn btn-secondary">English</button>
          <button onClick={handleClick} type="button" name="russian"  className="langSelector btn btn-secondary">Russian</button>
          <button onClick={handleClick} type="button" name="georgian" className="langSelector btn btn-secondary">Georgian</button>
          <button onClick={handleClick} type="button" name="thai"     className="langSelector btn btn-secondary">Thai</button>   
      </div>

      {/* Keyboard */}
      <div>
        <Keyboard insertCharacter={typeFromButton} key={selectedLanguage} keyboardLanguage={selectedLanguage}/>
      </div>
     
    </div>
  );
}

export default App;
