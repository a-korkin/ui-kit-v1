import React from "react";

import "./TopPanel.scss";

interface ITopPanelProps {
    collapse: boolean;
    onCollapseChange: (c: boolean) => void;
}

const TopPanel: React.FC<ITopPanelProps> = ({collapse, onCollapseChange}) => {

    return (
        <div className="top-panel">
            <div className="menu-burger">
                <input 
                    className="menu-burger__input" 
                    type="checkbox" 
                    name="menu" 
                    id="menu" 
                    onChange={e => onCollapseChange(!collapse)} 
                />
                <label 
                    className="menu-burger__label" 
                    htmlFor="menu" 
                >
                    <span></span>
                </label>
            </div>

            <h1>UI-Kit App</h1>
        </div>
    );
}

export default TopPanel;
