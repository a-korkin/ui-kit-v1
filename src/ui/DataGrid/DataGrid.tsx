import React, { useState } from "react";
import { ICell, SortDirections } from "../../models";
import Column from "./Column";
import Checkbox from "../Checkbox";
import "./DataGrid.scss";

interface IDataGridProps {
    headers: ICell[];
    data: ICell[];
}

const DataGrid: React.FC<IDataGridProps> = ({headers, data}) => {
    const [currentColumn, setCurrentColumn] = useState<ICell>();
    const [columns, setColumns] = useState<ICell[]>(headers);
    const [dataColumns, setDataColumns] = useState<ICell[]>(data);
    const [sortedColumn, setSotredColumn] = useState<number>();
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [mainSelect, setMainSelect] = useState<boolean>(false);

    const dropColumnHandler = (column: ICell) => {
        setColumns(columns.map(c => {
            if (c.col === column.col) {
                return {...c, col: currentColumn?.col ?? 1};
            }
            if (c.col === currentColumn?.col ?? 1) {
                return {...c, col: column.col};
            }
            return c;
        }));

        setDataColumns(dataColumns.map(c => {
            if (c.col === column.col) {
                return {...c, col: currentColumn?.col ?? 1};
            }
            if (c.col === currentColumn?.col ?? 1) {
                return {...c, col: column.col};
            }
            return c;
        }));
    }

    const sortColumns = (a: ICell, b: ICell): number => {
        if (a.col > b.col)
            return 1;
        else
            return -1;
    }

    const sortDataColumns = (a: ICell, b: ICell): number => {
        if (a.row === b.row) {
            return a.col > b.col ? 1 : -1
        } else {
            return a.row < b.row ? -1 : 1;
        }
    }

    const compareString = (a: ICell, b: ICell) => {
        if (a.value < b.value) return -1;
        if (a.value > b.value) return 1;
        return 0;
    }

    const orderRows = (columns: ICell[]): ICell[] => {
        let newDataArray: ICell[] = [];
        for (let i = 0; i < columns.length; i++) {
            let row = dataColumns.filter(w => w.row === columns[i].row);

            for (let j = 0; j < row.length; j++) {
                let cell = row[j];
                newDataArray.push({
                    ...cell,
                    row: i + 1,
                    col: j + 1
                });
            }
        }

        return newDataArray;
    }

    const sortColumnHandler = (column: ICell, direction: SortDirections) => {
        setSotredColumn(column.col);

        let sortedCols: ICell[] = [];

        switch (direction) {
            case SortDirections.ASC:
                sortedCols = dataColumns
                    .filter(w => w.col === column.col)
                    .sort(compareString);
                break;
            case SortDirections.DESC:
                sortedCols = dataColumns
                    .filter(w => w.col === column.col)
                    .sort(compareString)
                    .reverse();
                break;
        }
        setDataColumns(orderRows(sortedCols));
    }

    // выделить строку
    const selectRow = (isChecked: boolean, rowId: number) => {
        if (isChecked) {
            setSelectedRows(prevState => {
                return [
                    ...prevState.slice(0, prevState.findIndex(a => a === rowId)), 
                    ...prevState.slice(prevState.findIndex(a => a === rowId) + 1)
                ]
            });
        } else {
            setSelectedRows(prevState => {
                return [...prevState, rowId];
            });
        }
    }

    // выделить все
    const selectAllRows = () => {
        
        if (mainSelect) {
            setSelectedRows([]);
        } else {
            const uniqueRows = Array.from(new Set(dataColumns.map(c => c.row)));
            setSelectedRows([...uniqueRows]);
        }

        setMainSelect(!mainSelect);
    }

    // создание ячейки
    const createDataCell = (isChecked: boolean, cell: ICell) => {
        if (cell.col === 1) {
            return (
                <React.Fragment key={cell.id}>
                    <div className="grid-column-data">
                        <Checkbox 
                            id={cell.id} 
                            checked={isChecked} 
                            label="" 
                            onChange={(b: boolean) => {selectRow(isChecked, cell.row)}}
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
    const createRows = (cells: ICell[], rowLength: number = 6) => {
        let rows: any[] = [];
        
        for (let i = 0; i < cells.length; i += rowLength) {
            const isChecked = selectedRows.includes(cells[i].row);
            const row = (
                <div 
                    key={cells[i].row} 
                    className={isChecked ? "grid-row selected" : "grid-row"}
                >
                    {
                        cells.slice(i, i + rowLength).map((cell) => {
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
        <div className="grid">
            <div className={"grid-row"}>
                <div className="grid-column-data">
                    <Checkbox 
                        id="main" 
                        checked={mainSelect} 
                        label="" 
                        onChange={(t: boolean) => {selectAllRows()}} />
                </div>
                {
                    columns.sort(sortColumns).map((column) => (
                        <Column 
                            key={column.id} 
                            column={column} 
                            width={200}
                            height={40}
                            sorted={column.col === sortedColumn}
                            setCurrent={setCurrentColumn}
                            dropColumn={dropColumnHandler}
                            sortColumn={sortColumnHandler}
                        />
                    ))
                }
            </div>
            {
                createRows(dataColumns.sort(sortDataColumns))
            }
        </div>
    );
}

export default DataGrid;
