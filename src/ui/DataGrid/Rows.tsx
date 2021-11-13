import React from "react";
import { ICell } from "../../models";
import Checkbox from "../Checkbox";

interface IRowsProps {
    cells: ICell[];
    isCollapsed: boolean;
    headersCount: number;
    selectedRows: number[];
    groupHeaders: ICell[];
    selectRowHandler: (check: boolean, rowNumber: number) => void;
}

const Rows: React.FC<IRowsProps> = ({
    cells, isCollapsed, headersCount, 
    selectedRows, groupHeaders, selectRowHandler}) => {
        
    // создание пустой ячейки
    const createEmptyCell = (key?: string) => {
        if (key) {
            return (<div key={key} className="empty"></div>);
        } 
        return (
            <div className="empty"></div>
        );
    }

    // создание ячейки
    const createDataCell = (isChecked: boolean, cell: ICell) => {
        if (cell.col === 1) {
            return (
                <React.Fragment key={cell.id}>
                    {groupHeaders.length > 0 && 
                        groupHeaders.map(empty => 
                            <div key={empty.id} className="grid-column-data grid-column-data--empty">
                                {createEmptyCell()}
                            </div>
                        )
                    }
                    <div className="grid-column-data">
                        <Checkbox 
                            id={cell.id} 
                            checked={isChecked} 
                            label="" 
                            onChange={(b) => selectRowHandler(isChecked, cell.row)}
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

    // создание строк
    const createRows = (): JSX.Element[] => {
        let classes = isCollapsed ? "grid-row grid-row--collapsed" : "grid-row";

        let rows: JSX.Element[] = [];
        
        for (let i = 0; i < cells.length; i += headersCount) {
            const isChecked = selectedRows.includes(cells[i].row);
            const row = (
                <div 
                    key={cells[i].row} 
                    className={isChecked ? `${classes} selected` : classes}
                >
                    {
                        cells.slice(i, i + headersCount).map((cell) => {
                            return createDataCell(isChecked, cell)
                        })
                    }
                </div>
            );
            rows = [...rows, row];
        }
        return rows;
    }

    return (
        <>
        {createRows()}
        </>
    );
}

export default Rows;
