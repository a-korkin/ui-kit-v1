import React, { useState } from "react";
import "./Input.scss";

interface IInputProps {
    label: string;
    value: string;
    onChanged: (val: string) => void;
}

const Input: React.FC<IInputProps> = ({label, value, onChanged}) => {
    const [term, setTerm] = useState<string>(value);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        onChanged(val);
        setTerm(val);
    }

    return (
        <div className="input">
            <input
                id="input" 
                className="input__field" 
                type="text" 
                autoComplete="off"
                placeholder={label}
                value={term}
                onChange={e => onChangeHandler(e)}
            />
            <label 
                className="input__label" 
                htmlFor="input"
            >
                {label}
            </label>
        </div>
    );
}

export default Input;
