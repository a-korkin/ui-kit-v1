import React from "react";
import Input from "../ui/Input";

import "./pages.scss";

const Inputs: React.FC = () => {

    const onInputChangeHandler = () => {

    }

    return (
        <div className="pages-input">
            <Input 
                id="input-1" 
                label="Search" 
                value=""
                onChange={onInputChangeHandler} 
            />
            <Input 
                id="input-2" 
                label="Mask" 
                value=""
                mask="999-999-999_99" 
                onChange={onInputChangeHandler} 
            />
        </div>
    );
}

export default Inputs;
