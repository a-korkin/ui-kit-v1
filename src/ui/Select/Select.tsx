import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Option from "./Option";
import "./Select.scss";

interface ISelectProps {
    name: string;
    options: Map<string, string>;
    searchable?: boolean;
}

const Select: React.FC<ISelectProps> = ({name, options, searchable}) => {
    const [active, setActive] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>("Select category");

    const switchClasses = (): string => {
        const search_cls = searchable ? "searchable" : "";
        return active ? `options-container active ${search_cls}` : `options-container ${search_cls}`;
    }

    const selectedClickHandler = () => {
        setActive(!active);
    }

    const optionClickHandler = (id: string, value: string) => {
        setActive(false);
        setSelectedValue(value);
    }

    return (
        <div className="select-box">

            <div className={switchClasses()}>
                {
                    Array.from(options).map(([key, value]) => 
                        <Option 
                            key={key}
                            id={key} 
                            name={name} 
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

            {searchable &&
                <div className="search-box">
                    <input 
                        type="text" 
                        name="search_select" 
                        id="search_select" 
                        className="search-box__input"
                        placeholder="Search"
                    />
                </div>
            }
        </div>
    );
}
export default Select;
