import React, { useState } from "react";
import DatePicker from "../ui/DatePicker";

import "./pages.scss";

const DatePickers: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date(Date.now()));
    
    return (
        <DatePicker 
            label="Date" 
            value={date} 
            onChange={setDate} 
        />
    );
}

export default DatePickers;
