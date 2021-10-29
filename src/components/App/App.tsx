import React, { useState } from "react";
import { IDictionary, IAppState } from "../../models";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";
import CheckBox from "../../ui/Checkbox";
import DatePicker from "../../ui/DatePicker";
import Input from "../../ui/Input";
import MultiSelect from "../../ui/MultiSelect";
import Select from "../../ui/Select";
import Toggle from "../../ui/Toggle";

import "./App.scss";
import Sidebar from "../Sidebar";

const App: React.FC = () => {
    const initialState: IAppState = {
        input: "",
        maskInput: "",
        select: {} as IDictionary,
        multiSelect: [],
        checkbox: false,
        toggle: false,
        date: new Date(Date.now())
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

    const onInputChangeHandler = (id: string, value: string) => {
        switch (id) {
            case "input-1":
                setState({...state, input: value});
                break;
            case "input-2":
                setState({...state, maskInput: value});
                break;
        }
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

    const onDateChangeHanler = (value: Date) => {
        setState({...state, date: value});
    }

    const viewState = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(state);
    }

    return (
        <>
        <div className="container">
            <Sidebar />
            <main className="content">
                <h1>UI kit App</h1>
                <div onClick={e => viewState(e)}>
                    <Button>Submit</Button>
                </div>
                <div>
                    <Button><Loading /></Button>
                </div>
                <Input id="input-1" label="Search" value={state.input} onChange={onInputChangeHandler} />
                <Input id="input-2" label="Mask" value={state.maskInput} mask="999-999-999_99" onChange={onInputChangeHandler} />
                <Select options={options} label="Select" onChange={onSelectChangeHandler} />
                <MultiSelect options={options} label="Multiselect" onChange={onMultiSelectChangeHandler} />
                <CheckBox id="checkbox" checked={false} label="Checkbox" onChange={onCheckBoxChangeHandler} />
                <Toggle id="toggle" checked={false} label="Toggle" onChange={onToggleChangeHandler} />
                <DatePicker label="Date" value={state.date} onChange={onDateChangeHanler} />
            </main>
        </div>
        </>
    );
}

export default App;
