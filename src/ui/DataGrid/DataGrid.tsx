import React, { useState } from "react";
import { ICell, SortDirections, IColumn, Types } from "../../models";
import Header from "./Header";
import GroupToolbar from "./GroupToolbar";
import Checkbox from "../Checkbox";
import "./DataGrid.scss";
import GroupHeader from "./GroupHeader";
import Rows from "./Rows";

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
    
    // группировка
    const [groupHeaders, setGroupHeaders] = useState<ICell[]>([]);
    const [uniqueHeaders, setUniqueHeaders] = useState<IColumn[]>([]);


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

    // создание пустой ячейки
    const createEmptyCell = (key?: string) => {
        if (key) {
            return (<div key={key} className="empty"></div>);
        } 
        return (
            <div className="empty"></div>
        );
    }

    // группировка по столбцу
    const addGroupHandler = () => {
        setGroupHeaders(prevState => {
            return [...prevState, currentColumn as ICell];
        });

        setDataColumns(prevState => {
            return [
                ...prevState.filter(w => w.col !== currentColumn?.col)
            ];
        });
        
        const uniqueColumnValues: IColumn[] = Array.from(new Set(data.filter(w => w.col === currentColumn?.col).map(c => c.value)))
            .map((val) => ({
                id: currentColumn?.col ?? 1,
                type: Types.string,
                value: val
            }));

        setUniqueHeaders(prevState => {
            return [...prevState, ...uniqueColumnValues];
        });
    }

    // удаление группировки
    const removeGroupHandler = (header: ICell) => {
        setGroupHeaders(prevState => {
            return [
                ...prevState.slice(0, prevState.findIndex(a => a.col === header.col)), 
                ...prevState.slice(prevState.findIndex(a => a.col === header.col) + 1)
            ];
        });

        setDataColumns(prevState => {
            return [
                ...prevState, ...data.filter(w => w.col === header.col)
            ];
        });

        setUniqueHeaders(prevState => {
            return [
                ...prevState.filter(w => w.id !== header.col)
            ];
        });
    }

    // возвращает сгруппированные строки
    const getGroupedRows = (column: IColumn) => {
        const rows = data.filter(w => w.value === column.value).map(d => d.row);
        const isCollapsed = false;

        return (
            <React.Fragment key={column.value}>
                <GroupHeader 
                    column={column} 
                    isCollapsed={isCollapsed} 
                    cells={dataColumns.filter(w => rows.includes(w.row)).sort(sortDataColumns)} 
                    headersCount={headers.length}
                    selectedRows={selectedRows}
                    groupHeaders={groupHeaders}
                    selectRowHandler={selectRow}
                />
            </React.Fragment>
        );
    }

    return (
        <div className="grid-wrapper">
            <GroupToolbar 
                headers={groupHeaders} 
                addGroup={addGroupHandler} 
                removeGroup={removeGroupHandler}
            />

            <div className={`grid grid--${headers.length + 1}`}>
                <div className="grid-header">
                    {groupHeaders &&
                        groupHeaders.map((empty) => 
                            createEmptyCell(empty.col.toString())
                        )
                    }
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
                    <div className="group-container">
                        {uniqueHeaders.length > 0 &&
                            uniqueHeaders.map(header => (
                                getGroupedRows(header)
                            ))
                        }
                        {uniqueHeaders.length === 0 &&
                            <Rows 
                                cells={dataColumns.sort(sortDataColumns)} 
                                isCollapsed={false}
                                headersCount={headers.length}
                                selectedRows={selectedRows}
                                groupHeaders={groupHeaders}
                                selectRowHandler={selectRow}
                            />
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default DataGrid;
