import React from "react";
import Checkbox from "../ui/Checkbox";
import Toggle from "../ui/Toggle";

import "./pages.scss";

const Checkboxes: React.FC = () => {
    const onCheckBoxChangeHandler = (value: boolean) => {
    }

    const onToggleChangeHandler = (value: boolean) => {
    }

    return (
        <div className="pages-checkbox">
            <Checkbox 
                id="checkbox" 
                checked={false} 
                label="Checkbox" 
                onChange={onCheckBoxChangeHandler} 
            />
            <Toggle 
                id="toggle" 
                checked={false} 
                label="Toggle" 
                onChange={onToggleChangeHandler} 
            />
        </div>
    );
}

export default Checkboxes;
