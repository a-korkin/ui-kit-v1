import React, { useState } from "react";
import "./Input.scss";

interface IInputProps {
    label: string;
    value: string;
    mask?: string;
    onChange: (val: string) => void;
}

const Input: React.FC<IInputProps> = ({label, value, mask, onChange}) => {
    const [term, setTerm] = useState<string>(value);

    const maskChecker = (mask: string, str: string): string => {
        const maskChars = mask.split("");
        const strChars = str.split("");
        let result = "";        
        const digit = new RegExp(/\d/);

        let j = 0;
        for (let i = 0; i <= strChars.length; i++) {
            if (strChars[i] && maskChars[j]) {
                if (strChars[i] === "-") continue;

                console.log(`${strChars[i]}, ${maskChars[j]}`);

                if (maskChars[j] === "9") {
                    if (digit.test(strChars[i])) {
                        result += strChars[i];
                    }
                } else if (maskChars[j] === "-") {
                    result += maskChars[j] + strChars[i];
                    j++;
                } else {
                    result += maskChars[j] + strChars[i];
                }
                j++;
            }
        }

        return result;
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        if (mask) {
            val = maskChecker(mask, val);
        }
        onChange(val);
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
