import React, { useState } from "react";
import DatePicker from "../ui/DatePicker";

import "./pages.scss";

const DatePickers: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date(Date.now()));
    
    return (
        <div className="pages-datepicker">
            <DatePicker 
                label="Date" 
                value={date} 
                onChange={setDate} 
            />
        </div>
    );
}

export default DatePickers;
