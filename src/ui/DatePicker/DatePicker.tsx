import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from "../Calendar";

import "./DatePicker.scss";

interface IDatePicker {
    label: string;
    value: Date;
    onChange: (value: Date) => void;
}

const DatePicker: React.FC<IDatePicker> = ({label, value, onChange}) => {
    const dateToStr = (date: Date): string => {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();

        return `${day}.${month}.${year}`;
    }

    const maskChecker = (mask: string, str: string): string => {
        const maskChars = mask.split("");
        const strChars = str.split("");

        let result = "";        
        const digit = new RegExp(/\d/);

        // const dataReg = new RegExp(/[0-3]{1}[0-9]{1}\.[0-1]{1}[0-9]{1}\.\d{4}/);

        let j = 0;
        for (let i = 0; i <= strChars.length; i++) {
            if (strChars[i] && maskChars[j]) {
                if (strChars[i] === ".") continue;

                if (maskChars[j] === "9") {
                    if (digit.test(strChars[i])) {
                        result += strChars[i];
                    }
                } else if (maskChars[j] === ".") {
                    result += maskChars[j] + strChars[i];
                    j++;
                } else {
                    result += maskChars[j] + strChars[i];
                }
                j++;
            }
        }

        return result;
    }

    const [active, setActive] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(value);
    const [dateStr, setDateStr] = useState<string>(dateToStr(value));

    const inputDateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value; 
        val = maskChecker("99.99.9999", e.target.value);
        setDateStr(val);
        if (val.length === 10) {
            const newDate = new Date(parseInt(val.slice(-4)), parseInt(val.substring(3, 5)) - 1, parseInt(val.substring(0, 2)));
            setDate(newDate);
        }
    }

    const changeDateHandler = (date: Date) => {
        setDate(date);
        setActive(!active);
        setDateStr(dateToStr(date));
        onChange(date);
    }

    return (
        <div className={active ? "input input--date" : "input input--date hide"}>
            <input
                id="input" 
                className="input__field" 
                type="text" 
                autoComplete="off"
                placeholder="xx.xx.xxxx"
                value={dateStr}
                onChange={e => inputDateChangeHandler(e)}
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

            <Calendar value={date} onChange={changeDateHandler}/>
        </div>
    );
}

export default DatePicker;
