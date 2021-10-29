import React from "react";
import "./Button.scss";

interface IButtonProps {
    classes: string;
}

const Button: React.FC<IButtonProps> = ({classes,children}) => {
    return (
        <button className={classes}>{children}</button>
    );
}

export default Button;
