import React, { useState } from "react";
import Key from "./Key";

const Keyboard = (props) => {

    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

    const [ keyboardLanguage, setKeyboardLanguage]  = useState(props.keyboardLanguage);


    return(
        <div className="keyboard">
            <div id="row1" className="keyboardRow">
                {row1.map((c) => {
                    return (<Key 
                            key={c} 
                            characterVal={c} 
                            insertCharacter={props.insertCharacter}
                            selectedLanguage={keyboardLanguage}
                        />)
                })}
            </div>
            <div id="row2" className="keyboardRow">
                {row2.map((c) => {
                    return (<Key 
                            key={c} 
                            characterVal={c} 
                            insertCharacter={props.insertCharacter}
                            selectedLanguage={keyboardLanguage}
                        />)
                })}
            </div>
            <div id="row3" className="keyboardRow">
                {row3.map((c) => {
                    return (<Key 
                            key={c} 
                            characterVal={c} 
                            insertCharacter={props.insertCharacter}
                            selectedLanguage={keyboardLanguage}
                        />)
                })}
            </div>
        </div>
    )
}

export default Keyboard;