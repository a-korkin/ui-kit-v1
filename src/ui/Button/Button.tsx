import React from "react";
import "./Button.scss";

interface IButtonProps {

}

const Button: React.FC<IButtonProps> = ({children}) => {
    return (
        <button className="btn">{children}</button>
    );
}

export default Button;
