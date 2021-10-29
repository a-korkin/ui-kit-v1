import React from "react";

import "./Sidebar.scss";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            Sidebar
            <nav className="nav">
                <input type="checkbox" name="menu" id="menu" />
                <label htmlFor="menu">&#9776;</label>

                <div className="menu">
                    <div className="menu__item">
                        <input type="checkbox" name="A" id="A" />
                        <label htmlFor="A">Services</label>

                        <ul>
                            <li><a href="#">Branding</a></li>
                            <li><a href="#">Web/App development</a></li>
                            <li><a href="#">Internet Marketing and SEO</a></li>
                        </ul>
                    </div>

                    <div className="menu__item">
                        <input type="checkbox" name="B" id="B" />
                        <label htmlFor="B">Jobs</label>
                        <ul>
                            <li>
                                <div className="menu__item-sub">
                                    <input type="checkbox" name="BA" id="BA" />
                                    <label htmlFor="BA">UI/UX</label>

                                    <ul>
                                        <li><a href="#">UI/UX Designer</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#">UI Designer</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#">UX Designer</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="menu__item-sub">
                                    <input type="checkbox" name="BB" id="BB" />
                                    <label htmlFor="BB">Development</label>

                                    <ul>
                                        <li><a href="#">FrontEnd</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#">BackEnd</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#">Graphic</a></li>
                            <li><a href="#">Logo Designer</a></li>
                        </ul>
                    </div>

                    <div className="menu__item">
                        <input type="checkbox" name="C" id="C" />
                        <label htmlFor="C"></label>

                        <ul>
                            <li><a href="#">Our team</a></li>
                            <li><a href="#">Clents</a></li>
                            <li><a href="#">Our work</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
