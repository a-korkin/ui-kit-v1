import React from "react";
import "./Input.scss";

interface IInputProps {
    label: string;
}

const Input: React.FC<IInputProps> = ({label}) => {
    return (
        <div className="input">
            <input
                id="input" 
                className="input__field" 
                type="text" 
                autoComplete="off"
                placeholder={label}
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
