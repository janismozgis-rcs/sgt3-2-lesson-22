import { useState } from "react";
import TextInput from "./TextInput";

function TextWrapper() {
    const [value1, setValue1] = useState('foo');
    const [value2, setValue2] = useState('bar');

    const updateValue1 = (value) => {
        setValue1(value);
    }
    const updateValue2 = (value) => {
        setValue2(value);
    }

    return (
        <div>
            <h2>Current value: {value1}</h2>
            <TextInput someText={value1} updateCallback={updateValue1} />
            <h2>Current value: {value2}</h2>
            <TextInput someText={value2} updateCallback={updateValue2} />
        </div>
    )
}

export default TextWrapper;