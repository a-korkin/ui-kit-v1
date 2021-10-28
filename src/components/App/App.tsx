import React, { useState } from "react";
import { IDictionary, IAppState } from "../../models";
import Button from "../../ui/Button";
import Calendar from "../../ui/Calendar";
import CheckBox from "../../ui/CheckBox";
import DatePicker from "../../ui/DatePicker";
import Input from "../../ui/Input";
import MultiSelect from "../../ui/MultiSelect";
import Select from "../../ui/Select";
import Toggle from "../../ui/Toggle";

import "./App.scss";

const App: React.FC = () => {
    const initialState: IAppState = {
        input: "",
        select: {} as IDictionary,
        multiSelect: [],
        checkbox: false,
        toggle: false
    };
    const [state, setState] = useState<IAppState>(initialState);

    const options: IDictionary[] = [
        {id: "1", value: "automobiles"},
        {id: "2", value: "animations"},
        {id: "3", value: "technology"},
        {id: "4", value: "art"},
        {id: "5", value: "sports"},
        {id: "6", value: "news"},
        {id: "7", value: "music"}
    ];

    const onInputChangeHandler = (value: string) => {
        setState({...state, input: value});
    }

    const onSelectChangeHandler = (value: IDictionary) => {
        setState({...state, select: value});
    }

    const onMultiSelectChangeHandler = (value: IDictionary[]) => {
        setState({...state, multiSelect: value});
    }

    const onCheckBoxChangeHandler = (value: boolean) => {
        setState({...state, checkbox: value});
    }

    const onToggleChangeHandler = (value: boolean) => {
        setState({...state, toggle: value});
    }

    const viewState = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(state);
    }

    return (
        <>
        <h1>UI kit App</h1>
        <div className="container">
            <div onClick={e => viewState(e)}>
                <Button>Submit</Button>
            </div>
            <Input label="Search" value={state.input} onChange={onInputChangeHandler} />
            <Input label="Mask" value={state.input} mask="999-999-999_99" onChange={onInputChangeHandler} />
            <Select options={options} label="Select" onChange={onSelectChangeHandler} />
            <MultiSelect options={options} label="Multiselect" onChange={onMultiSelectChangeHandler} />
            <CheckBox id="checkbox" checked={false} label="Checkbox" onChange={onCheckBoxChangeHandler} />
            <Toggle id="toggle" checked={false} label="Toggle" onChange={onToggleChangeHandler} />
            {/* <Calendar currentDate={new Date(Date.now())} /> */}
            <DatePicker label="Date" />
        </div>
        </>
    );
}

export default App;
