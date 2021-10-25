import React from "react";
import { GrFormClose } from 'react-icons/gr';
import { IDictionary } from "../../models";

interface IHeaderProps {
    options: IDictionary[];
    onRemoveClick: (id: string, value: string) => void;
}

const Header: React.FC<IHeaderProps> = ({options, onRemoveClick}) => {
    return (
        <div className="multi-select__header">
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
