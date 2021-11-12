import React, { useState } from "react";
import { ICell, SortDirections } from "../../models";
import Header from "./Header";
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
    
    const [headersCount, setHeadersCount] = useState<number>(headers.length);
    const [groupHeaders, setGroupHeaders] = useState<ICell[]>([]);

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
        // const inGroup: boolean = groupHeaders.some(a => a.col === cell.col);

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
                        // className={inGroup ? "hide" : "grid-column-data"}
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
                // className={inGroup ? "hide" : "grid-column-data"}
                className="grid-column-data"
            >
                {cell.value}
            </div>
        )
    }

    // создание строк
    const createRows = (cells: ICell[]) => {
        let rows: any[] = [];
        
        for (let i = 0; i < cells.length; i += headersCount) {
            const isChecked = selectedRows.includes(cells[i].row);
            // const inGroup = groupHeaders.some(a => a.col === cells[i].col);
            const row = (
                <div 
                    key={cells[i].row} 
                    className={isChecked ? "grid-row selected" : "grid-row"}
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

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const groupHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        // console.log(data);

        setGroupHeaders(prevState => {
            return [...prevState, currentColumn as ICell];
        });

        setHeadersCount(prevState => {
            return prevState - 1;
        });

        setDataColumns(prevState => {
            return [
                ...prevState.filter(w => w.col !== currentColumn?.col)
            ]
        });
    }

    const removeGroupHandler = (e: React.MouseEvent<HTMLSpanElement>, header: ICell) => {
        setGroupHeaders(prevState => {
            return [
                ...prevState.slice(0, prevState.findIndex(a => a.col === header.col)), 
                ...prevState.slice(prevState.findIndex(a => a.col === header.col) + 1)
            ];
        });

        setHeadersCount(prevState => {
            return prevState + 1;
        });

        setDataColumns(prevState => {
            return [
                ...prevState, ...data.filter(w => w.col === header.col)
            ];
        });
    }

    return (
        <div className="grid-wrapper">
        <div 
            className="group-toolbar"
            onDragStart={e => dragHandler(e)}
            onDragEnter={e => dragHandler(e)}
            onDragLeave={e => dragHandler(e)}
            onDragEnd={e => dragHandler(e)}
            onDragOver={e => dragHandler(e)}
            onDrop={e => groupHandler(e)}
        >
            {
                groupHeaders.map(head => 
                    <div 
                        key={head.col}
                        className="group-toolbar__item"
                    >
                        {head.value}
                        <span 
                            className="remove"
                            onClick={e => removeGroupHandler(e, head)}
                        >&times;</span>
                    </div>
                )
            }
        </div>

            <div className={`grid grid--${headersCount + 1}`}>
                <div className="grid-header">
                    <div className="grid-column-data">
                        <Checkbox 
                            id="main" 
                            checked={mainSelect} 
                            label="" 
                            onChange={(t: boolean) => {selectAllRows()}} />
                    </div>
                    {
                        columns.sort(sortColumns).map((column) => (
                            <Header 
                                key={column.id} 
                                group={groupHeaders.includes(column)}
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
        </div>
    );
}

export default DataGrid;
