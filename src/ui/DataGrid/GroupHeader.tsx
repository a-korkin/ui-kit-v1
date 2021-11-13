import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IColumn } from "../../models";

interface IGroupHeaderProps {
    column: IColumn;
    isCollapsed: boolean;
    onChange: (col: IColumn, value: boolean) => void;
}

const GroupHeader: React.FC<IGroupHeaderProps> = ({column, isCollapsed, onChange}) => {
    const [checked, setChecked] = useState<boolean>(isCollapsed);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked);
        onChange(column, !checked);
    }
    
    return (
        <div className="group-container-header">
            <input 
                type="checkbox" 
                name={column.value} 
                id={column.value} 
                checked={checked}
                onChange={onChangeHandler} 
            />
            <label htmlFor={column.value} className="icon">
                <FaAngleRight />
            </label>
            <div>
                {column.value}
            </div> 
        </div>        
    );
}

export default GroupHeader;
