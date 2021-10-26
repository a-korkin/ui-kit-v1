import React from "react";

import "./Calendar.scss";

const Calendar: React.FC = () => {
    return (
        <div className="calendar">
            <div className="calendar__year-month">
                <div className="month">February</div>
                <div className="year"><span>&#60;</span> 2021 <span>&#62;</span></div>
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
                <div className="calendar__days-item">1<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">2<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">3<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">4<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">5<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">6<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">7<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">8<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">9<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">10<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">11<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">12<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">13<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">14<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">15<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">16<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">17<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">18<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">19<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">20<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">21<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">22<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">23<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">24<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">25<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">26<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">27<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">28<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">29<span></span><span></span><span></span><span></span></div>
                <div className="calendar__days-item">30<span></span><span></span><span></span><span></span></div>
            </div>
        </div>
    );
}

export default Calendar;
