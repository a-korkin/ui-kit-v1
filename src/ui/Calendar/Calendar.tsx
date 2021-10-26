import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IDate } from "../../models";

import "./Calendar.scss";

interface ICalendarProps {
    currentDate: Date;
}

const Calendar: React.FC<ICalendarProps> = ({currentDate}) => {
    const months: Map<number, string> = new Map([
        [1, "January"],
        [2, "February"],
        [3, "March"],
        [4, "April"],
        [5, "May"],
        [6, "June"],
        [7, "July"],
        [8, "August"],
        [9, "September"],
        [10, "October"],
        [11, "November"],
        [12, "December"],
    ]);

    const daysInMonth: Map<number, number> = new Map([
        [1, 31],
        [2, 28],
        [3, 31],
        [4, 30],
        [5, 31],
        [6, 30],
        [7, 31],
        [8, 31],
        [9, 30],
        [10, 31],
        [11, 30],
        [12, 31]
    ]);

    const _date: IDate = {
        year: currentDate.getFullYear(),
        month: {id: currentDate.getMonth() + 1, name: months.get(currentDate.getMonth() + 1)},
        day: currentDate.getDate()
    }

    const createDays = (count: number): number[] => {
        let days: number[] = [];

        for (let i = 1; i <= count; i++) {
            days.push(i);
        }
        return days;
    }
    
    const [date, setDate] = useState<IDate>(_date);
    const [days, setDays] = useState<number[]>(createDays(daysInMonth.get(_date.month.id) ?? 30));
    const [activeDay, setActiveDay] = useState<number>(_date.day);
    const [activeMonth, setActiveMonth] = useState<boolean>(false);

    const changeYearHandler = (e: React.MouseEvent<HTMLSpanElement>, type: string) => {
        switch (type) {
            case "add":
                setDate(prevState => ({...prevState, year: prevState.year + 1}));
                break;
            case "remove":
                setDate(prevState => ({...prevState, year: prevState.year - 1}));
                break;
        }
    }

    const changeMonthHandler = (e: React.MouseEvent<HTMLButtonElement>, key: number) => {
        setDate(prevState => ({
            ...prevState, month: {id: key, name: months.get(key)}
        }));
        setActiveMonth(false);
        setDays(createDays(daysInMonth.get(key) ?? 30));
    }

    return (
        <div className="calendar">
            <div className={activeMonth ? "calendar__months active" : "calendar__months"}>
                {
                    Array.from(months).map(([key, value]) => 
                        <button 
                            className="calendar__months-item" 
                            key={key}
                            onClick={e => changeMonthHandler(e, key)}
                        >
                            {value}
                        </button>)
                }
            </div>
            <div className="calendar__year-month">
                <button className="month" onClick={e => setActiveMonth(!activeMonth)}>{date.month.name}</button>
                <div className="year">
                    <button onClick={e => changeYearHandler(e, "remove")}><FaAngleLeft /></button>
                    <span>{date.year}</span>
                    <button onClick={e => changeYearHandler(e, "add")}><FaAngleRight /></button>
                </div>
            </div>
            <div className="calendar__week">
                <div className="calendar__week-item">Mon</div>
                <div className="calendar__week-item">Tue</div>
                <div className="calendar__week-item">Wed</div>
                <div className="calendar__week-item">Thu</div>
                <div className="calendar__week-item">Fri</div>
                <div className="calendar__week-item">Sat</div>
                <div className="calendar__week-item">Sun</div>
            </div>
            <div className="calendar__days">
                {
                    days.map(day => 
                        <div 
                            key={day} 
                            className={activeDay === day ? "calendar__days-item active" : "calendar__days-item"}
                            onClick={e => setActiveDay(day)}
                        >
                            {day}
                            <span></span><span></span><span></span><span></span>
                        </div>)
                }
            </div>
        </div>
    );
}

export default Calendar;
