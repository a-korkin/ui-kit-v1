import React, { useState } from "react";
import { IDictionary, IAppState } from "../../models";
import Button from "../../ui/Button";
import Calendar from "../../ui/Calendar";
import CheckBox from "../../ui/CheckBox";
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
            <Input label="Search" value={state.input} onChanged={onInputChangeHandler} />
            <Select options={options} label="Select" onChanged={onSelectChangeHandler} />
            <MultiSelect options={options} label="Multiselect" onChanged={onMultiSelectChangeHandler} />
            <CheckBox id="checkbox" checked={false} label="Checkbox" />
            <Toggle id="toggle" checked={false} label="Toggle" />
            <Calendar currentDate={new Date(Date.now())} />
        </div>
        </>
    );
}

export default App;
