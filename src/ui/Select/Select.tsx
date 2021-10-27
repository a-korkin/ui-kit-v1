import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IDictionary } from "../../models";
import Option from "./Option";
import "./Select.scss";

interface ISelectProps {
    label: string;
    options: IDictionary[];
    onChanged: (val: IDictionary) => void;
}

const Select: React.FC<ISelectProps> = ({label, options, onChanged}) => {
    const [term, setTerm] = useState<string>("");
    const [active, setActive] = useState<boolean>(false);
    const [opts, setOpts] = useState(options);
    
    const clickSearchHandler = () => {
        setActive(!active);
    }

    const optionClickHandler = (id: string, value: string) => {
        setTerm(value);
        setActive(!active);
        const selected = options.find(w => w.id === id);
        if (selected)
            onChanged(selected);
    }

    const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
        const _opts = options.filter(({value}) => value.includes(e.target.value));
        setOpts(_opts);
    }

    window.onclick = (event: MouseEvent) => {
        if ((event.target as Element).tagName.toLowerCase() === "html") {
            setActive(false);            
        }
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
                    autoComplete="off"
                    onChange={e => searchChangeHandler(e)}
                    // onFocus={focusInputHandler}
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
                    opts.map(({id, value}) => 
                        <Option 
                            key={id}
                            id={id} 
                            name="category" 
                            value={value}
                            onClick={optionClickHandler} 
                        />)
                }
            </div>
        </div>
    );
}

export default Select;
