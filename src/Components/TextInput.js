import { useState } from "react";

function TextInput({someText, updateCallback}) {
    const [text, setText] = useState(someText);

    const updateText = (event) => {
        setText(event.target.value);
        updateCallback(event.target.value)
    }

    return (
        <div>
            <h4>The current text for child is: {text}</h4>
            <input className="form-control" value={text} onChange={updateText} />
        </div>
    )
}

export default TextInput;