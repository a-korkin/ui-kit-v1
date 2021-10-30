import React from "react";
import "./Button.scss";

interface IButtonProps {
    classes: string;
    disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({classes, disabled, children}) => {
    return (
        <button className={classes} disabled={disabled}>{children}</button>
    );
}

export default Button;
