import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Option from "./Option";
import "./DropDown.scss";

interface IDropDownProps {
    label: string;
    options: Map<string, string>;
}

const DropDown: React.FC<IDropDownProps> = ({label, options}) => {
    const [term, setTerm] = useState<string>("");
    const [active, setActive] = useState<boolean>(false);
    const [opts, setOpts] = useState(options);
    
    const clickSearchHandler = () => {
        setActive(!active);
    }

    const optionClickHandler = (id: string, value: string) => {
        setTerm(value);
        setActive(!active);
    }

    const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
        const _opts = new Map([...Array.from(options)].filter(([k, v]) => v.includes(e.target.value)));
        setOpts(_opts);
    }

    return (
        <div className="select">
            <div className="select__search" onClick={clickSearchHandler}>
                <span className={active ? "selected_icon active" : "selected_icon"}><FaAngleDown /></span>
                <input 
                    className="select__input" 
                    type="text" 
                    name="select_search"
                    id={label} 
                    placeholder={label}
                    value={term}
                    onChange={e => searchChangeHandler(e)}
                />
                <label 
                    className="select__label" 
                    htmlFor="select_search"
                >
                    {label}
                </label>
            </div> 
            <div className={active ? "options active" : "options"}>
                {
                    Array.from(opts).map(([key, value]) => 
                        <Option 
                            key={key}
                            id={key} 
                            name="category" 
                            value={value}
                            onClick={optionClickHandler} 
                        />)
                }
            </div>
        </div>
    );
}

export default DropDown;
