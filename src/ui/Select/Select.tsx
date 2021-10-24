import React from "react";
import { FaAngleDown } from "react-icons/fa";
import "./Select.scss";

const Select: React.FC = () => {
    return (
        <div className="select-box">
            
            <div className="options-container active">
                <div className="option">
                    <input type="radio" name="category" id="automobiles" className="radio" />
                    <label htmlFor="automobiles">Automobiles</label>
                </div>
                <div className="option">
                    <input type="radio" name="category" id="animations" className="radio" />
                    <label htmlFor="animations">Film & animations</label>
                </div>
                <div className="option">
                    <input type="radio" name="category" id="technology" className="radio" />
                    <label htmlFor="technology">Science & technology</label>
                </div>
                <div className="option">
                    <input type="radio" name="category" id="art" className="radio" />
                    <label htmlFor="art">Art</label>
                </div>
                <div className="option">
                    <input type="radio" name="category" id="sports" className="radio" />
                    <label htmlFor="sports">Sports</label>
                </div>
                <div className="option">
                    <input type="radio" name="category" id="news" className="radio" />
                    <label htmlFor="news">News</label>
                </div>
                <div className="option">
                    <input type="radio" name="category" id="music" className="radio" />
                    <label htmlFor="music">Music</label>
                </div>
            </div>

            <div className="selected">
                Select video category
                <FaAngleDown />
            </div>
        </div>
    );
}
export default Select;
