import React, { useState } from "react";
import Converter from "../Converter";

const Key = (props) => {

    const [keyLanguage, setKeyLanguage] = useState(props.selectedLanguage);
    
    // Map key's character value
    const setKeyDisplay = (character) => {
        return Converter.convert(character, keyLanguage, props.uppercase);   
    }


    const keyVal = setKeyDisplay(props.characterVal);

    // Styles for physical key and selectedLanguage key
    const topCharStyle = {
        color: "grey", 
        textAlign: "left"}
    const bottomCharStyle = {
        color: "black", 
        textAlign: "right",
        visibility: keyVal !== null ? "visible" : "hidden"
    }
    
    

    
    return(
        <button 
            // key={props.characterVal} 
            className="keyboardKey" 
            // onClick={() => props.insertCharacter(keyVal)}
        >
            <div style={topCharStyle}>{props.characterVal}</div>
            <div style={bottomCharStyle}>{keyVal || 'X'}</div>
        </button>
    )
}

export default Key;