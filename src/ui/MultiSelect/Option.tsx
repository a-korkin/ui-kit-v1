import React from "react";

interface IOptionsProps {
    id: string;
    value: string;
    onClick: (id: string, value: string) => void;
}

const Option: React.FC<IOptionsProps> = ({id, value, onClick}) => {
    return (
        <div 
            className="multi-select__options-item" 
            id={id}
            onClick={e => onClick(id, value)}
        >
            {value}
        </div>
    );
}

export default Option;
