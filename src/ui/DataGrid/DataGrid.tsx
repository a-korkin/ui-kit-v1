import React, { useState } from "react";
import { IColumn, SortDirections } from "../../models";
import Column from "./Column";

import "./DataGrid.scss";

interface IDataGridProps {
    headers: IColumn[];
    data: IColumn[];
}

const DataGrid: React.FC<IDataGridProps> = ({headers, data}) => {
    
    const [currentColumn, setCurrentColumn] = useState<IColumn>();

    const [columns, setColumns] = useState<IColumn[]>(headers);

    const [dataColumns, setDataColumns] = useState<IColumn[]>(data);

    const [sortedColumn, setSotredColumn] = useState<number>();

    const dropColumnHandler = (column: IColumn) => {
        setColumns(columns.map(c => {
            if (c.col === column.col) {
                return {...c, col: currentColumn?.col ?? 1};
            }
            if (c.col === currentColumn?.col ?? 1) {
                return {...c, col: column.col};
            }
            return c;
        }));

        console.log(`droped: ${column.name} | current: ${currentColumn?.name}`);

        // setDataColumns(dataColumns.map(c => {
        //     if (c.col === column.col) {
        //         return {...c, order: currentColumn?.col ?? 1};
        //     }
        //     if (c.col === currentColumn?.col ?? 1) {
        //         return {...c, col: column.col};
        //     }
        //     return c;
        // }));

        console.log(orderColumns(column, currentColumn));
    }

    const sortColumns = (a: IColumn, b: IColumn): number => {
        if (a.col > b.col)
            return 1;
        else
            return -1;
    }

    const sortDataColumns = (a: IColumn, b: IColumn): number => {
        if (a.row === b.row) {
            return a.col > b.col ? 1 : -1
        } else {
            return a.row < b.row ? -1 : 1;
        }
    }

    const orderColumns = (a: IColumn, b?: IColumn): IColumn[] => {
        return dataColumns.map(c => {
            if (c.col === a.col) {
                return {...c, col: b?.col ?? 1};
            } else if (c.col === a.col) {
                return {...c, col: b?.col ?? 1};
            }
            return c;
        })
    }

    const orderRows = (columns: IColumn[]): IColumn[] => {
        let newDataArray: IColumn[] = [];
        for (let i = 0; i < columns.length; i++) {
            let row = data.filter(w => w.row === columns[i].row);

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
        setSotredColumn(column.col);

        let sortedCols: IColumn[] = [];

        switch (direction) {
            case SortDirections.ASC:
                sortedCols = data.filter(w => w.col === column.col).sort();
                setDataColumns(orderRows(sortedCols));
                break;
            case SortDirections.DESC:
                sortedCols = data.filter(w => w.col === column.col).sort().reverse();
                setDataColumns(orderRows(sortedCols));
                break;
        }
    }

    return (
        <div className="grid">
            {
                columns.sort(sortColumns).map((column) => (
                    <Column 
                        key={column.id} 
                        column={column} 
                        width={100}
                        height={40}
                        sorted={column.col === sortedColumn}
                        setCurrent={setCurrentColumn}
                        dropColumn={dropColumnHandler}
                        sortColumn={sortColumnHandler}
                    />
                ))
            }
            {
                // dataColumns.sort(sortDataColumns).map((column) => (
                dataColumns.sort(o => o.row).map((column) => (
                    <div 
                        key={column.id}
                        className="grid-column-data"
                    >
                        {column.name}
                    </div>
                ))
            }
        </div>
    );
}

export default DataGrid;
