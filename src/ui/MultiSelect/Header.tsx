import React, { useState } from "react";
import { GrFormClose } from 'react-icons/gr';
import { FaAngleDown } from "react-icons/fa";
import { IDictionary } from "../../models";

interface IHeaderProps {
    options: IDictionary[];
    onRemoveClick: (id: string, value: string) => void;
}

const Header: React.FC<IHeaderProps> = ({options, onRemoveClick}) => {
    const [active, setActive] = useState<boolean>();

    const clickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        setActive(!active);
    }

    window.onclick = (event: MouseEvent) => {
        if ((event.target as Element).tagName.toLowerCase() === "html") {
            setActive(false);            
        }
    }

    return (
        <div 
            className={active ? "multi-select__header active" : "multi-select__header"}>
            {
                options.map(({id, value}) => 
                    <div 
                        key={id} 
                        className="selected-item" 
                        id={id}
                    >
                        {value}
                        <span className="icon-close">
                            <GrFormClose onClick={e => onRemoveClick(id, value)} />
                        </span>
                    </div> 
                )
            }
            <span className="icon" onClick={e => clickHandler(e)}><FaAngleDown /></span>
        </div>
    );
}

export default Header;
