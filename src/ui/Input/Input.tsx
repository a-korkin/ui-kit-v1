import React, { useEffect, useState } from "react";
import "./Input.scss";

interface IInputProps {
    id: string;
    label: string;
    value: string;
    mask?: string;
    onChange: (id: string, val: string) => void;
}

const Input: React.FC<IInputProps> = ({id, label, value, mask, onChange}) => {
    const [term, setTerm] = useState<string>(value);

    useEffect(() => {
        setTerm(value);
    }, [value]);

    const maskChecker = (mask: string, str: string): string => {
        const maskChars = mask.split("");
        const strChars = str.split("");
        let result = "";        
        const digit = new RegExp(/\d/);

        let j = 0;
        for (let i = 0; i <= strChars.length; i++) {
            if (strChars[i] && maskChars[j]) {
                if (strChars[i] === "-") continue;

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

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        let val = e.target.value;
        if (mask) {
            val = maskChecker(mask, val);
        }
        onChange(id, val);
        setTerm(val);
    }

    return (
        <div className="input">
            <input
                id={id} 
                className="input__field" 
                type="text" 
                autoComplete="off"
                placeholder={label}
                value={term}
                onChange={e => onChangeHandler(e, id)}
            />
            <label 
                className="input__label" 
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
}

export default Input;
