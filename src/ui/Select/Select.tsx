import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Option from "./Option";
import "./Select.scss";

const Select: React.FC = () => {
    const options = ["automobiles", "animations", "technology", "art", "sports", "news", "music"];
    const [active, setActive] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>("Select category");

    const selectedClickHandler = () => {
        setActive(!active);
    }

    const optionClickHandler = (id: string) => {
        setActive(false);
        setSelectedValue(id);
    }

    return (
        <div className="select-box">

            <div className={active ? "options-container active" : "options-container"}>
                {
                    options.map((option) => 
                        <Option 
                            id={option} 
                            name="category" 
                            value={option.toUpperCase()}
                            onClick={optionClickHandler}
                        />
                    )
                }
            </div>

            <div className="selected" onClick={selectedClickHandler}>
                {selectedValue}
                <FaAngleDown />
            </div>
        </div>
    );
}
export default Select;
