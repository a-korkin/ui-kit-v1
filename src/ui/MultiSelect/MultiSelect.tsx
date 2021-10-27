import React, { useState } from "react";
import Option from "./Option";
import Header from "./Header";
import { IDictionary } from "../../models";

import "./MultiSelect.scss";

interface IMultiSelectProps {
    options: IDictionary[];
    label: string;
    onChanged: (selected: IDictionary[]) => void;
}

const MultiSelect: React.FC<IMultiSelectProps> = ({options, label, onChanged}) => {
    const [opts, setOpts] = useState<IDictionary[]>(options);
    const [selected, setSelected] = useState<IDictionary[]>([]);
        
    const clickOptionHandler = (id: string, value: string) => {
        setSelected(prev => {
            return [...prev, {id, value}];
        });

        setOpts(prev => {
            return [...prev.slice(0, prev.findIndex(a => a.id === id)), 
                    ...prev.slice(prev.findIndex(a => a.id === id) + 1)];
        });

        onChanged([...selected, {id, value}]);
    }

    const clickRemoveHandler = (id: string, value: string) => {
        setSelected(prev => {
            return [...prev.slice(0, prev.findIndex(a => a.id === id)),
                    ...prev.slice(prev.findIndex(a => a.id === id) + 1)]
        });

        setOpts(prev => {
            return [...prev, {id, value}];
        });
    }

    return (
        <div className="multi-select">
            <label className="multi-select__label">{label}</label>
            <Header 
                options={selected} 
                onRemoveClick={clickRemoveHandler} 
            />
            <div className="multi-select__options">
                {
                    opts.map(({id, value}) => 
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
