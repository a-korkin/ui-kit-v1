import React from "react";

interface IOptionProps {
    id: string;
    name: string;
    value: string;
    onClick: (id: string, value: string) => void;
}

const Option: React.FC<IOptionProps> = ({id, name, value, onClick}) => {
    return (
        <div className="option" onClick={e => onClick(id, value)}>
            <input type="radio" name={name} id={id} className="option__radio" />
            <label className="option__label" htmlFor={name}>{value}</label>
        </div>

    );
}

export default Option;
