import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IDate } from "../../models";

import "./Calendar.scss";

interface ICalendarProps {
    currentDate: Date;
}

interface Month {
    id: number;
    name: string;
    days: number;
    code: number;
}

const Calendar: React.FC<ICalendarProps> = ({currentDate}) => {
    const months: Month[] = [
        { id: 1, name: "January", days: 31, code: 1 },
        { id: 2, name: "February", days: 28, code: 4 },
        { id: 3, name: "March", days: 31, code: 4 },
        { id: 4, name: "April", days: 30, code: 0 },
        { id: 5, name: "May", days: 31, code: 2 },
        { id: 6, name: "June", days: 30, code: 5 },
        { id: 7, name: "July", days: 31, code: 0 },
        { id: 8, name: "August", days: 31, code: 3 },
        { id: 9, name: "September", days: 30, code: 6 },
        { id: 10, name: "October", days: 31, code: 1 },
        { id: 11, name: "November", days: 30, code: 4 },
        { id: 12, name: "December", days: 31, code: 6 }
    ];

    const _date: IDate = {
        year: currentDate.getFullYear(),
        month: {id: currentDate.getMonth() + 1, name: months.find(w => w.id === currentDate.getMonth() + 1)?.name},
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
    const [days, setDays] = useState<number[]>(createDays(months.find(w => w.id === _date.month.id)?.days ?? 30));
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
            ...prevState, month: {id: key, name: months.find(w => w.id === key)?.name}
        }));
        setActiveMonth(false);
        setDays(createDays(months.find(w => w.id === key)?.days ?? 30));
    }

    const getDayOfWeek = (day: number) => {
        const week: Map<number, string> = new Map([
            [0, "Sat"],
            [1, "Sun"],
            [2, "Mon"],
            [3, "Tue"],
            [4, "Wed"],
            [5, "Thu"],
            [6, "Fri"]
        ]);


        const yearTwo = parseInt(date.year.toString().slice(-2));
        const yearCode = (6 + yearTwo + parseInt((yearTwo / 4).toString())) % 7;
        const dayOfWeek = (day + 1 + yearCode) % 7;
        console.log(week.get(dayOfWeek));
    }

    getDayOfWeek(date.day);

    return (
        <div className="calendar">
            <div className={activeMonth ? "calendar__months active" : "calendar__months"}>
                {
                    months.map(({id, name}) =>     
                        <button 
                            className="calendar__months-item" 
                            key={id}
                            onClick={e => changeMonthHandler(e, id)}
                        >
                            {name}
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
