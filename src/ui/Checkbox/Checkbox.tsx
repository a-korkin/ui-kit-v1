import React, { ChangeEvent, useState } from "react";
import { FaCheck } from "react-icons/fa";

import "./Checkbox.scss";

interface ICheckboxProps {
    id: string;
    checked: boolean;
    label: string;
    onChange: (value: boolean) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({id, checked, label, onChange}) => {
    const [isCheck, setCheck] = useState<boolean>(checked);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(!isCheck);
        onChange(!isCheck);
    }

    return (
        <div className="checkbox">
            <label htmlFor={id} className="checkbox__label">
                <input 
                    type="checkbox" 
                    name={id} 
                    id={id} 
                    checked={isCheck} 
                    onChange={e => onChangeHandler(e)} 
                />
                <span className="checkbox__label-icon">
                    <FaCheck />
                </span>
                <span className="checkbox__label-text">
                    {label}
                </span> 
            </label>
        </div>
    );
}

export default Checkbox;
