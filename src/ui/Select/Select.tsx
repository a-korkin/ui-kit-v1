import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Option from "./Option";
import "./Select.scss";

interface ISelectProps {
    options: Map<string, string>;
}

const Select: React.FC<ISelectProps> = ({options}) => {
    
    const [active, setActive] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>("Select category");

    const selectedClickHandler = () => {
        setActive(!active);
    }

    const optionClickHandler = (id: string, value: string) => {
        setActive(false);
        setSelectedValue(value);
    }

    return (
        <div className="select-box">

            <div className={active ? "options-container active" : "options-container"}>
                {
                    Array.from(options).map(([key, value]) => 
                        <Option 
                            key={key}
                            id={key} 
                            name="category" 
                            value={value}
                            onClick={optionClickHandler}
                        />
                    )
                }
            </div>

            <div className="selected" onClick={selectedClickHandler}>
                {selectedValue}
                <span className="selected__icon"><FaAngleDown /></span> 
            </div>
        </div>
    );
}
export default Select;
