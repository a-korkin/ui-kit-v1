import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

import "./CheckBox.scss";

interface ICheckBoxProps {
    id: string;
    checked: boolean;
    label: string;
}

const CheckBox: React.FC<ICheckBoxProps> = ({id, checked, label}) => {
    const [isCheck, setCheck] = useState<boolean>(checked);

    return (
        <div className="checkbox">
            <label htmlFor={id} className="checkbox__label">
                <input 
                    type="checkbox" 
                    name={id} 
                    id={id} 
                    checked={isCheck} 
                    onChange={e => setCheck(!isCheck)} 
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

export default CheckBox;
