import React from "react";

interface IOptionProps {
    id: string;
    name: string;
    value: string;
    onClick: (id: string, value: string) => void;
}

const Option: React.FC<IOptionProps> = ({id, name, value, onClick}) => {
    return (
        <div className="options__item" onClick={e => onClick(id, value)}>
            <input className="options__item-input" type="radio" name={name} id={id} />
            <label className="options__item-label" htmlFor={id}>{value}</label>
        </div>
    );
}

export default Option;
