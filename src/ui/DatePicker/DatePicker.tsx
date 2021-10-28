import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "../Calendar";

import "./DatePicker.scss";

interface IDatePicker {
    label: string;
}

const DatePicker: React.FC<IDatePicker> = ({label}) => {
    const [active, setActive] = useState<boolean>(false);


    return (
        <div className={active ? "input input--date" : "input input--date hide"}>
            <input
                id="input" 
                className="input__field" 
                type="text" 
                autoComplete="off"
                placeholder="XX.XX.XXXX"
                // value={term}
                // onChange={e => onChangeHandler(e)}
            />
            <label 
                className="input__label" 
                htmlFor="input"
            >
                {label}
            </label>
            <span className="date-icon" onClick={e => setActive(!active)}>
                <FaCalendarAlt />
            </span>

            <Calendar currentDate={new Date(Date.now())} />
        </div>
    );
}

export default DatePicker;
