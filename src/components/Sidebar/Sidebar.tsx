import React from "react";
import { FaAngleRight } from "react-icons/fa";
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
                        <label className="menu__item-label menu__item--clickable" htmlFor="A"><FaAngleRight />Buttons</label>

                        <ul className="item__list">
                            <li className="menu__item--clickable">
                                <Link to="/buttons" className="item-link">Buttons</Link>
                            </li>
                            {/* <li className="menu__item--clickable"><a className="item-link" href="#">Buttons</a></li> */}
                            {/* <li className="menu__item--clickable"><a className="item-link" href="#">Web/App development</a></li>
                            <li className="menu__item--clickable"><a className="item-link" href="#">Internet Marketing and SEO</a></li> */}
                        </ul>
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="B" id="B" />
                        <label className="menu__item-label menu__item--clickable" htmlFor="B"><FaAngleRight />Jobs</label>
                        <ul className="item__list">
                            <li>
                                <div className="menu__item">
                                    <input className="menu__item-input" type="checkbox" name="BA" id="BA" />
                                    <label className="menu__item-label menu__item--clickable" htmlFor="BA"><FaAngleRight />UI/UX</label>

                                    <ul className="item__list">
                                        <li className="menu__item--clickable"><a className="item-link" href="#">UI/UX Designer</a></li>
                                        <li className="menu__item--clickable"><a className="item-link" href="#">UI Designer</a></li>
                                        <li className="menu__item--clickable"><a className="item-link" href="#">UX Designer</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="menu__item">
                                    <input className="menu__item-input" type="checkbox" name="BB" id="BB" />
                                    <label className="menu__item-label menu__item--clickable" htmlFor="BB"><FaAngleRight />Development</label>

                                    <ul className="item__list">
                                        <li className="menu__item--clickable"><a className="item-link" href="#">FrontEnd</a></li>
                                        <li className="menu__item--clickable"><a className="item-link" href="#">BackEnd</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu__item--clickable"><a className="item-link" href="#">Graphic</a></li>
                            <li className="menu__item--clickable"><a className="item-link" href="#">Logo Designer</a></li>
                        </ul>
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="C" id="C" />
                        <label className="menu__item-label menu__item--clickable" htmlFor="C"><FaAngleRight />About</label>

                        <ul className="item__list">
                            <li className="menu__item--clickable"><a className="item-link" href="#">Our team</a></li>
                            <li className="menu__item--clickable"><a className="item-link" href="#">Clents</a></li>
                            <li className="menu__item--clickable"><a className="item-link" href="#">Our work</a></li>
                        </ul>
                    </div>

                   
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
