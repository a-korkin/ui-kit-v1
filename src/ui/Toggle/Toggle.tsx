import React, { useState } from "react";

import "./Toggle.scss";

interface IToggleProps {
    id: string;
    checked: boolean;
    label: string;
    onChange: (value: boolean) => void;
}

const Toggle: React.FC<IToggleProps> = ({id, checked, label, onChange}) => {
    const [isCheck, setCheck] = useState<boolean>(checked);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(!isCheck);
        onChange(!isCheck);
    }

    return (
        <div className="toggle">
            <input 
                type="checkbox" 
                name={id} 
                id={id} 
                checked={isCheck} 
                onChange={e => onChangeHandler(e)} 
            />
            <label htmlFor={id} className="toggle__label">
                <span className="toggle__label-text">
                    {label}
                </span> 
            </label>
        </div>
    );
}

export default Toggle;
