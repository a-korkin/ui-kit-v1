import React from "react";
import { FaCheck } from "react-icons/fa";

import "./CheckBox.scss";

const CheckBox: React.FC = () => {
    return (
        <div className="checkbox">
            <label htmlFor="checkbox" className="checkbox__label">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <span className="checkbox__label-icon">
                    <FaCheck />
                </span>
                <span className="checkbox__label-text">
                    Checkbox
                </span> 
            </label>
        </div>
    );
}

export default CheckBox;
