import React from "react";
import "./Select.scss";

const Select: React.FC = () => {
    return (
        <div className="select-wrapper">
            <div className="select">
                <div className="select__trigger">
                    <span>Tesla</span>
                    <div className="arrow"></div>
                </div>
                <div className="custom-options">
                    <span className="custom-option selected" data-value="tesla">Tesla</span>
                    <span className="custom-option" data-value="volvo">Volvo</span>
                    <span className="custom-option" data-value="mercedes">Mercedes</span>
                </div>
            </div>
        </div>
    );
}
export default Select;
