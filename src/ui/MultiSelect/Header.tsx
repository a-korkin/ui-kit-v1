import React, { useState } from "react";
import { GrFormClose } from 'react-icons/gr';
import { IDictionary } from "../../models";

interface IHeaderProps {
    options: IDictionary[];
    onRemoveClick: (id: string, value: string) => void;
}

const Header: React.FC<IHeaderProps> = ({options, onRemoveClick}) => {
    const [active, setActive] = useState<boolean>();

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setActive(true);
    }

    return (
        <div 
            className={active ? "multi-select__header active" : "multi-select__header"} 
            onClick={e => clickHandler(e)}>
            {
                options.map(({id, value}) => 
                    <div 
                        key={id} 
                        className="selected-item" 
                        id={id}
                    >
                        {value}
                        <GrFormClose onClick={e => onRemoveClick(id, value)} />
                    </div> 
                )
            }
        </div>
    );
}

export default Header;
