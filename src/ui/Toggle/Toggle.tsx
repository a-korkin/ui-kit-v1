import React, { useState } from "react";

import "./Toggle.scss";

interface IToggleProps {
    id: string;
    checked: boolean;
    label: string;
}

const Toggle: React.FC<IToggleProps> = ({id, checked, label}) => {
    const [isCheck, setCheck] = useState<boolean>(checked);

    return (
        <div className="toggle">
            <input 
                type="checkbox" 
                name={id} 
                id={id} 
                checked={isCheck} 
                onChange={e => setCheck(!isCheck)} 
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
