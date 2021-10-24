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
    const clickSearchHandler = () => {
        setActive(!active);
    }

    const optionClickHandler = (id: string, value: string) => {
        setTerm(value);
        setActive(!active);
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
                    onChange={e => setTerm(e.target.value)}
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
                    Array.from(options).map(([key, value]) => 
                        <Option 
                            id={key} 
                            name="category" 
                            value={value}
                            onClick={optionClickHandler} />)
                }
                {/* <div className="options__item">
                    <input className="options__item-input" type="radio" name="category" id="1" />
                    <label className="options__item-label" htmlFor="1">music</label>
                </div>
                <div className="options__item">
                    <input className="options__item-input" type="radio" name="category" id="2" />
                    <label className="options__item-label" htmlFor="2">video</label>
                </div>
                <div className="options__item">
                    <input className="options__item-input" type="radio" name="category" id="3" />
                    <label className="options__item-label" htmlFor="3">television</label>
                </div>
                <div className="options__item">
                    <input className="options__item-input" type="radio" name="category" id="4" />
                    <label className="options__item-label" htmlFor="4">autos</label>
                </div>
                <div className="options__item">
                    <input className="options__item-input" type="radio" name="category" id="5" />
                    <label className="options__item-label" htmlFor="5">science</label>
                </div>
                <div className="options__item">
                    <input className="options__item-input" type="radio" name="category" id="6" />
                    <label className="options__item-label" htmlFor="6">technology</label>
                </div>
                <div className="options__item">
                    <input className="options__item-input" type="radio" name="category" id="7" />
                    <label className="options__item-label" htmlFor="7">antropology</label>
                </div>
                <div className="options__item">
                    <input className="options__item-input" type="radio" name="category" id="8" />
                    <label className="options__item-label" htmlFor="8">chemistry</label>
                </div> */}
            </div>
        </div>
    );
}

export default DropDown;
