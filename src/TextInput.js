import { useState } from "react";

function LiveInput(){
    const [text, setText] = useState("");
    return(
        <div>
            <textarea 
                type="text"
                value= {text}
                onChange={(e) =>{
                    setText(e.target.value)
                }}
            ></textarea>

            <p>The user typed: {text}</p>
            
        </div>
    )
}

export default LiveInput;