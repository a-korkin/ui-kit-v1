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

        for (let i = 0; i <= maskChars.length; i++) {
            // if (strChars[i]) {
            //     console.log(`${maskChars[i]} - ${strChars[i]}: ${maskChars[i] === strChars[i]}`);   
            // }

            if (strChars[i] && maskChars[i] === strChars[i]) {
                result += strChars[i];
            }
        }

        return result;
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const val = e.target.value;
        let val = e.target.value;
        if (mask) {
            // const reg = new RegExp(/^\d{3}/);
            // console.log(reg.test(val));
            // console.log(val.match(reg));
            // console.log(mask);
            // onChange(val);
            // setTerm(val);

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
