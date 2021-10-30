import React from "react";
import { IDictionary } from "../models";
import MultiSelect from "../ui/MultiSelect";
import Select from "../ui/Select";

import "./pages.scss";

const Selects: React.FC = () => 
{
    const options: IDictionary[] = [
        {id: "1", value: "automobiles"},
        {id: "2", value: "animations"},
        {id: "3", value: "technology"},
        {id: "4", value: "art"},
        {id: "5", value: "sports"},
        {id: "6", value: "news"},
        {id: "7", value: "music"}
    ];

    const onSelectChangeHandler = (value: IDictionary) => {}

    const onMultiSelectChangeHandler = (value: IDictionary[]) => {}

    return (
        <div className="pages-select">
            <Select 
                options={options} 
                label="Select" 
                onChange={onSelectChangeHandler} 
            />
    
            <MultiSelect 
                options={options} 
                label="Multiselect" 
                onChange={onMultiSelectChangeHandler} 
            />
        </div>
    );
}

export default Selects;
