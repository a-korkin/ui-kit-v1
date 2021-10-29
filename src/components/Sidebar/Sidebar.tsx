import React from "react";
import { FaAngleRight } from "react-icons/fa";

import "./Sidebar.scss";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <nav className="nav">
                <input type="checkbox" className="nav__input" name="menu" id="menu" />
                <label className="nav__label" htmlFor="menu">&#9776;</label>

                <div className="menu">
                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="A" id="A" />
                        <label className="menu__item-label" htmlFor="A"><FaAngleRight />Services</label>

                        <ul className="item__list">
                            <li><a className="item-link" href="#">Branding</a></li>
                            <li><a className="item-link" href="#">Web/App development</a></li>
                            <li><a className="item-link" href="#">Internet Marketing and SEO</a></li>
                        </ul>
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="B" id="B" />
                        <label className="menu__item-label" htmlFor="B"><FaAngleRight />Jobs</label>
                        <ul className="item__list">
                            <li>
                                <div className="menu__item">
                                    <input className="menu__item-input" type="checkbox" name="BA" id="BA" />
                                    <label className="menu__item-label" htmlFor="BA"><FaAngleRight />UI/UX</label>

                                    <ul className="item__list">
                                        <li><a className="item-link" href="#">UI/UX Designer</a></li>
                                        <li><a className="item-link" href="#">UI Designer</a></li>
                                        <li><a className="item-link" href="#">UX Designer</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="menu__item">
                                    <input className="menu__item-input" type="checkbox" name="BB" id="BB" />
                                    <label className="menu__item-label" htmlFor="BB"><FaAngleRight />Development</label>

                                    <ul className="item__list">
                                        <li><a className="item-link" href="#">FrontEnd</a></li>
                                        <li><a className="item-link" href="#">BackEnd</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a className="item-link" href="#">Graphic</a></li>
                            <li><a className="item-link" href="#">Logo Designer</a></li>
                        </ul>
                    </div>

                    <div className="menu__item">
                        <input className="menu__item-input" type="checkbox" name="C" id="C" />
                        <label className="menu__item-label" htmlFor="C"><FaAngleRight />About</label>

                        <ul className="item__list">
                            <li><a className="item-link" href="#">Our team</a></li>
                            <li><a className="item-link" href="#">Clents</a></li>
                            <li><a className="item-link" href="#">Our work</a></li>
                        </ul>
                    </div>

                   
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
