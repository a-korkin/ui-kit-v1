import React, { useState } from "react";
import { ICell, SortDirections, IColumn, Types } from "../../models";
import Header from "./Header";
import GroupToolbar from "./GroupToolbar";
import GroupContainer from "./GroupContainer";
import Checkbox from "../Checkbox";
import "./DataGrid.scss";
import Rows from "./Rows";

interface IDataGridProps {
    headers: IColumn[];
    data: ICell[];
}

const DataGrid: React.FC<IDataGridProps> = ({headers, data}) => {
    const [currentColumn, setCurrentColumn] = useState<IColumn>();
    const [columns, setColumns] = useState<IColumn[]>(headers);
    const [dataColumns, setDataColumns] = useState<ICell[]>(data);
    const [sortedColumn, setSotredColumn] = useState<number>();
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [mainSelect, setMainSelect] = useState<boolean>(false);
    
    // группировка
    const [groupHeaders, setGroupHeaders] = useState<IColumn[]>([]);
    const [uniqueHeaders, setUniqueHeaders] = useState<IColumn[]>([]);
    const [groupColumnOrder, setGroupColumnOrder] = useState<number>(0);

    // test
    const [groupedCells, setGroupedCells] = useState<ICell[]>([]);

    const dropColumnHandler = (column: IColumn) => {
        setColumns(columns.map(c => {
            if (c.id === column.id) {
                return {...c, col: currentColumn?.id ?? 1};
            }
            if (c.id === currentColumn?.id ?? 1) {
                return {...c, col: column.id};
            }
            return c;
        }));

        setDataColumns(dataColumns.map(c => {
            if (c.col === column.id) {
                return {...c, col: currentColumn?.id ?? 1};
            }
            if (c.col === currentColumn?.id ?? 1) {
                return {...c, col: column.id};
            }
            return c;
        }));
    }

    const sortColumns = (a: IColumn, b: IColumn): number => {
        if (a.id > b.id)
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

    const sortColumnHandler = (column: IColumn, direction: SortDirections) => {
        setSotredColumn(column.id);

        let sortedCols: ICell[] = [];

        switch (direction) {
            case SortDirections.ASC:
                sortedCols = dataColumns
                    .filter(w => w.col === column.id)
                    .sort(compareString);
                break;
            case SortDirections.DESC:
                sortedCols = dataColumns
                    .filter(w => w.col === column.id)
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
        let prevColumn = groupHeaders.filter(w => w.order === groupColumnOrder)[0];
        
        setGroupColumnOrder(prevState => {
            return prevState + 1;
        });

        const column: IColumn = {
            ...currentColumn, 
            order: groupColumnOrder + 1, 
        } as IColumn;

        if (prevColumn) {
            prevColumn = {...prevColumn, child: column} as IColumn;
        }

        setGroupHeaders(prevState => {
            if (prevColumn) {
                return [
                    ...prevState.slice(0, prevState.findIndex(a => a.id === prevColumn.id)),
                    prevColumn,
                    ...prevState.slice(prevState.findIndex(a => a.id === prevColumn.id) + 1),
                    column
                ];
            } 
            return [...prevState, column];
        });

        setDataColumns(prevState => {
            return [
                ...prevState.filter(w => w.col !== currentColumn?.id)
            ];
        });
        
        const uniqueColumnValues: IColumn[] = Array.from(new Set(data.filter(w => w.col === currentColumn?.id).map(c => c.value)))
            .map((val) => ({
                id: currentColumn?.id ?? 1,
                type: Types.string,
                value: val
            }));

        setUniqueHeaders(prevState => {
            return [...prevState, ...uniqueColumnValues];
        });

        // test 
        [...uniqueHeaders, ...uniqueColumnValues].filter(w => w.id === column.id).map(u => 
            setGroupedCells(prevState => {
                return [...prevState, ...data.filter(w => w.value === u.value)];
            })
        )      
    }

    // удаление группировки
    const removeGroupHandler = (header: IColumn) => {
        setGroupHeaders(prevState => {
            return [
                ...prevState.slice(0, prevState.findIndex(a => a.id === header.id)), 
                ...prevState.slice(prevState.findIndex(a => a.id === header.id) + 1)
            ];
        });

        setDataColumns(prevState => {
            return [
                ...prevState, ...data.filter(w => w.col === header.id)
            ];
        });

        setUniqueHeaders(prevState => {
            return [
                ...prevState.filter(w => w.id !== header.id)
            ];
        });
    }

    // возвращает сгруппированные строки
    const getGroupedRows = (column: IColumn) => {
        const rows = data.filter(w => w.value === column.value).map(d => d.row);
        const isCollapsed = false;

        const cells = dataColumns.filter(w => rows.includes(w.row)).sort(sortDataColumns);
        // console.log(cells);

        return (
            <React.Fragment key={column.value}>
                <GroupContainer 
                    column={column} 
                    isCollapsed={isCollapsed} 
                    cells={cells} 
                    headersCount={headers.length}
                    selectedRows={selectedRows}
                    groupHeaders={groupHeaders}
                    selectRowHandler={selectRow}
                />
            </React.Fragment>
        );
    }

    // prototype 1
    // const test = () => {
    //     groupHeaders.sort((a, b) => {return (a?.order ?? 1) > (b?.order ?? 1) ? 1 : -1}).map(g => {
    //         console.log(g.order)
    //         uniqueHeaders.filter(w => w.id === g.id).map(u => 
    //             console.log(data.filter(w => w.value === u.value))
    //         )
    //     })
    // }

    // test();

    // prototype 2
    // const test = (column: IColumn) => {
    //     if (column) {
    //         console.log(column.order);
    //         uniqueHeaders.filter(w => w.id === column.id).map(u => 
    //             console.log(data.filter(w => w.value === u.value))
    //         )
    
    //         if (column.child)
    //             test(column.child);
    //     }
    // }

    // test(groupHeaders.filter(w => w.order === 1)[0]);

    // prototype 3
    // const test = (column: IColumn) => {
    //     if (column) {
    //         uniqueHeaders.filter(w => w.id === column.id).map(u => 
    //             setGroupedCells(prevState => {
    //                 return [...prevState, ...data.filter(w => w.value === u.value)];
    //             })
    //         )
    
    //         if (column.child)
    //             test(column.child);
    //     }
    // }

    const reducer = (a: ICell, b: ICell): ICell => {
        let array: number[] = [];
        if (a.row === b.row) {
            array.push(a.row)
            // return dataColumns.filter(w => w.row === a.row)[0];
        }
        return groupedCells.filter(w => w.row === array[0])[0];
    }

    console.log(groupedCells.reduce(reducer));

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
                            createEmptyCell(empty.id.toString())
                        )
                    }
                    <div className="grid-column-data">
                        <Checkbox 
                            id="main" 
                            checked={mainSelect} 
                            label="" 
                            onChange={(t: boolean) => {selectAllRows()}} 
                        />
                    </div>
                    {
                        columns.sort(sortColumns).map((column) => (
                            <Header 
                                key={column.id} 
                                group={groupHeaders.some(s => s.id === column.id)}
                                column={column} 
                                width={200}
                                height={40}
                                sorted={column.id === sortedColumn}
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

                            // elements
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
