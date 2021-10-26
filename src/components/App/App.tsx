import React from "react";
import { IDate, IDictionary } from "../../models";
import Button from "../../ui/Button";
import Calendar from "../../ui/Calendar";
import CheckBox from "../../ui/CheckBox";
import Input from "../../ui/Input";
import MultiSelect from "../../ui/MultiSelect";
import Select from "../../ui/Select";
import Toggle from "../../ui/Toggle";

import "./App.scss";

const App: React.FC = () => {
    const options: IDictionary[] = [
        {id: "1", value: "automobiles"},
        {id: "2", value: "animations"},
        {id: "3", value: "technology"},
        {id: "4", value: "art"},
        {id: "5", value: "sports"},
        {id: "6", value: "news"},
        {id: "7", value: "music"}
    ];

    return (
        <>
        <h1>UI kit App</h1>
        <div className="container">
            <div>
                <Button>Submit</Button>
            </div>
            <Input label="Search" />
            <Select options={options} label="Select" />
            <MultiSelect options={options} label="Multiselect" />
            <CheckBox id="checkbox" checked={false} label="Checkbox" />
            <Toggle id="toggle" checked={false} label="Toggle" />
            <Calendar currentDate={new Date(Date.now())} />
        </div>
        </>
    );
}

export default App;
