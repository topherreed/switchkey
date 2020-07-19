import React, { useState } from 'react';
import Keyboard from "./components/Keyboard";

function App() {

  const [ selectedLanguage, setSelectedLanguage ] = useState("english");


  const russianDict= {
    'a': 'ф',
    'b': 'и',
    'c': 'с',
    'd': 'в',
    'e': 'у',
    'f': 'а',
    'g': 'п',
    'h': 'р',
    'i': 'ш',
    'j': 'о',
    'k': 'л',
    'l': 'д',
    'm': 'ь',
    'n': 'т',
    'o': 'щ',
    'p': 'з',
    'q': 'й',
    'r': 'к', 
    's': 'ы',
    't': 'е',
    'u': 'г',
    'v': 'м',
    'w': 'ц',
    'x': 'ч',
    'y': 'н',
    'z': 'я'
  }
  const georgianDict = {
    'a': 'ა',
    'b': 'ბ',
    'c': 'ც',
    'd': 'დ',
    'e': 'ე',
    'f': 'ფ',
    'g': 'გ',
    'h': 'ჰ',
    'i': 'ი',
    'j': 'ჯ',
    'k': 'კ',
    'l': 'ლ',
    'm': 'მ',
    'n': 'ნ',
    'o': 'ო',
    'p': 'პ',
    'q': 'ქ',
    'r': 'რ', 
    's': 'ს',
    't': 'ტ',
    'u': 'უ',
    'v': 'ვ',
    'w': 'ხ',
    'x': 'ხ',
    'y': 'ყ',
    'z': 'ზ'
  }
  const thaiDict = {
    'a': 'ฟ',
    'b': 'ิ',
    'c': 'แ',
    'd': 'ก',
    'e': 'ำ',
    'f': 'ด',
    'g': 'เ',
    'h': '้',
    'i': 'ร',
    'j': '่',
    'k': 'า',
    'l': 'ส',
    'm': 'ท',
    'n': 'ื',
    'o': 'น',
    'p': 'ย',
    'q': 'ๆ',
    'r': 'พ', 
    's': 'ห',
    't': 'ะ',
    'u': 'ี',
    'v': 'อ',
    'w': 'ไ',
    'x': 'ป',
    'y': 'ั',
    'z': 'ผ'
  }

  const typeFromButton = (character) => {
    // working on it
  }

  // Match key to foreign keyboard equivalent
  const switchKey = (lang, c) => {

    if(lang === 'georgian') {
        return georgianDict[c];
    } else if(lang === 'russian') {
        return russianDict[c];
    } else if(lang === 'thai') {
        return thaiDict[c];
    }

  }

  
  const handleKeyPress = (e) => {

    const {selectionStart, selectionEnd, value} = e.target;

    const newText = value.slice(0, selectionStart) + switchKey(selectedLanguage, e.key) + value.slice(selectionEnd);
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
          rows="4" cols="30" 
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
