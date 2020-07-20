import React, { useState } from "react";
import Key from "./Key";

const Keyboard = (props) => {

    const row1 = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\' ],
        [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|' ]
    ];
    const row2 = [
        [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''],
        [ 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"' ]
    ];
    const row3 = [
        [ 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/' ],
        [ 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?' ]
    ];


    const [ keyboardLanguage, setKeyboardLanguage]  = useState(props.keyboardLanguage);


    return(
        <div className="keyboard">
            <div id="row1" className="keyboardRow">
                {row1[props.characterCase].map((c) => {
                    return (<Key 
                            // key={c} 
                            characterVal={c} 
                            insertCharacter={props.insertCharacter}
                            selectedLanguage={keyboardLanguage}
                            uppercase={props.characterCase}
                        />)
                })}
            </div>
            <div id="row2" className="keyboardRow">
                {row2[props.characterCase].map((c) => {
                    return (<Key 
                            // key={c} 
                            characterVal={c} 
                            insertCharacter={props.insertCharacter}
                            selectedLanguage={keyboardLanguage}
                            uppercase={props.characterCase}
                        />)
                })}
            </div>
            <div id="row3" className="keyboardRow">
                {row3[props.characterCase].map((c) => {
                    return (<Key 
                            // key={c} 
                            characterVal={c} 
                            insertCharacter={props.insertCharacter}
                            selectedLanguage={keyboardLanguage}
                            uppercase={props.characterCase}
                        />)
                })}
            </div>
        </div>
    )
}

export default Keyboard;