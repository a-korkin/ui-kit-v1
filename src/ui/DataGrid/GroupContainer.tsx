import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { ICell, IColumn } from "../../models";
import Rows from "./Rows";

interface IGroupContainerProps {
    column: IColumn;
    isCollapsed: boolean;
    cells: ICell[];
    headersCount: number;
    selectedRows: number[];
    groupHeaders: IColumn[];
    selectRowHandler: (check: boolean, rowNumber: number) => void;
}

const GroupContainer: React.FC<IGroupContainerProps> = ({
    column, isCollapsed, cells, headersCount, 
    selectedRows, groupHeaders, selectRowHandler}) => {
        
    const [checked, setChecked] = useState<boolean>(isCollapsed);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked);
    }
    
    return (
        <div className="group-container-wrapper">
            <div className="group-container-header">
                <input 
                    type="checkbox" 
                    name={column.value} 
                    id={column.value} 
                    checked={checked}
                    onChange={onChangeHandler} 
                />
                <label htmlFor={column.value} className="icon">
                    <FaAngleDown />
                </label>
                <div>
                    {column.value}
                </div> 
            </div>
            <Rows 
                cells={cells} 
                isCollapsed={checked}
                headersCount={headersCount}
                selectedRows={selectedRows}
                groupHeaders={groupHeaders}
                selectRowHandler={selectRowHandler}
            />
        </div>        
    );
}

export default GroupContainer;
