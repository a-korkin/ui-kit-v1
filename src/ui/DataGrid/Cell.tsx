import React, { useState } from "react";
import { ICell } from "../../models";
import Checkbox from "../Checkbox";

interface ICellProps {
    cell: ICell;
    isChecked: boolean;
    onCheck: (c: boolean) => void;
}

const Cell: React.FC<ICellProps> = ({cell, isChecked, onCheck}) => {
    const [check, setCheck] = useState<boolean>(isChecked);

    const onChangeHandler = () => {
        onCheck(!check);
        setCheck(!check)
    }

    if (cell.col === 1) {
        // const isChecked = selectedRows.includes(cell.row);
        return (
            <React.Fragment key={cell.id}>
                <div className="grid-column-data">
                    <Checkbox 
                        id={cell.id} 
                        checked={check} 
                        label="" 
                        onChange={onChangeHandler}
                    />
                </div>

                <div 
                    className="grid-column-data"
                >
                    {cell.value}
                </div>
            </React.Fragment>
        )
    }
    return(    
        <div 
            key={cell.id}
            className="grid-column-data"
        >
            {cell.value}
        </div>
    )
}

export default Cell;
