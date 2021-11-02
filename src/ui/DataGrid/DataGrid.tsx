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

        setDataColumns(dataColumns.map(c => {
            if (c.col === column.col) {
                return {...c, order: currentColumn?.col ?? 1};
            }
            if (c.col === currentColumn?.col ?? 1) {
                return {...c, col: column.col};
            }
            return c;
        }));
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

    const sortColumnHandler = (column: IColumn, direction: SortDirections) => {
        setSotredColumn(column.col);

        // console.log(column.col);

        switch (direction) {
            case SortDirections.ASC:
                // console.log(data.filter(w => w.col === column.col).sort());
                break;
                case SortDirections.DESC:
                    console.log(data.filter(w => w.col === column.col).sort().reverse());
                    let newDataArray: IColumn[];

                    // console.log(data.filter(w => w.col === column.col));
                    // 6 столбцов
                    // for (let c = 1; c <= 5; c++) {
                        
                    // }
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
                dataColumns.sort(sortDataColumns).map((column) => (
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
