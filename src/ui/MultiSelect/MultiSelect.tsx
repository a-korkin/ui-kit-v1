import React, { useState } from "react";
import Option from "./Option";
import Header from "./Header";
import { IDictionary } from "../../models";

import "./MultiSelect.scss";

const MultiSelect: React.FC = () => {
    const [options, setOptions] = useState<IDictionary[]>([
        {id: "1", value: "Item1"},
        {id: "2", value: "Item2"},
        {id: "3", value: "Item3"},
        {id: "4", value: "Item4"},
        {id: "5", value: "Item5"},
        {id: "6", value: "Item6"},
        {id: "7", value: "Item7"},
        {id: "8", value: "Item8"},
        {id: "9", value: "Item9"},
        {id: "10", value: "Item10"},
        {id: "11", value: "Item11"},
        {id: "12", value: "Item12"},
    ]);
    const [selected, setSelected] = useState<IDictionary[]>([]);
        
    const clickOptionHandler = (id: string, value: string) => {
        setSelected(prev => {
            return [...prev, {id, value}];
        });

        setOptions(prev => {
            return [...prev.slice(0, prev.findIndex(a => a.id === id)), 
                    ...prev.slice(prev.findIndex(a => a.id === id) + 1)];
        });
    }

    const clickRemoveHandler = (id: string, value: string) => {
        setSelected(prev => {
            return [...prev.slice(0, prev.findIndex(a => a.id === id)),
                    ...prev.slice(prev.findIndex(a => a.id === id) + 1)]
        });

        setOptions(prev => {
            return [...prev, {id, value}];
        });
    }

    return (
        <div className="multi-select">
            <label className="multi-select__label">Multiselect</label>
            <Header 
                options={selected} 
                onRemoveClick={clickRemoveHandler} 
            />
            <div className="multi-select__options">
                {
                    options.map(({id, value}) => 
                        <Option 
                            key={id} 
                            id={id} 
                            value={value} 
                            onClick={clickOptionHandler} 
                        />)
                }
            </div>
        </div>
    );
}

export default MultiSelect;
