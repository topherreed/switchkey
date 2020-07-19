import React, { useState } from "react";
import Converter from "../Converter";

const Key = (props) => {

    const [keyLanguage, setKeyLanguage] = useState(props.selectedLanguage);
    

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

    // Map key value
    const setKeyDisplay = (character) => {
        console.log("setting display for: " + character);

        return Converter.convert(character, keyLanguage);
        
    }

    const keyVal = setKeyDisplay(props.characterVal);

    
    return(
        <button 
            key={props.characterVal} 
            className="keyboardKey" 
            onClick={() => props.insertCharacter(keyVal)}
        >
            {keyVal}
        </button>
    )
}

export default Key;