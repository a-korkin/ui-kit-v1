import React from "react";
// import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

interface ISidebarProps {
    collapse: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({collapse}) => {
    return (
        <div className={collapse ? "sidebar collapse" : "sidebar"}>
            <nav className="nav">

                <div className="menu">
                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="A" id="A" />
                        <label className="menu__item-label menu__item--clickable" htmlFor="A">
                            <Link to="/buttons" className="item-link">Buttons</Link>
                        </label>

                        {/* <ul className="item__list">
                            <li className="menu__item--clickable">
                                <Link to="/buttons" className="item-link">Buttons</Link>
                            </li>
                        </ul> */}
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="B" id="B" />
                        <label className="menu__item-label menu__item--clickable" htmlFor="B">
                            <Link to="/inputs" className="item-link">Inputs</Link>
                        </label>
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="B" id="B" />
                        <label className="menu__item-label menu__item--clickable" htmlFor="B">
                            <Link to="/selects" className="item-link">Selects</Link>
                        </label>
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="B" id="B" />
                        <label className="menu__item-label menu__item--clickable" htmlFor="B">
                            <Link to="/checkboxes" className="item-link">Checkboxes</Link>
                        </label>
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="B" id="B" />
                        <label className="menu__item-label menu__item--clickable" htmlFor="B">
                            <Link to="/datepickers" className="item-link">DatePickers</Link>
                        </label>
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="B" id="B" />
                        <label className="menu__item-label menu__item--clickable" htmlFor="B">
                            <Link to="/form" className="item-link">Form</Link>
                        </label>
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="B" id="B" />
                        <label className="menu__item-label menu__item--clickable" htmlFor="B">
                            <Link to="/datagrid" className="item-link">DataGrid</Link>
                        </label>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
