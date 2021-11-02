import React, { useState } from "react";
import { IColumn } from "../../models";
import Column from "./Column";

import "./DataGrid.scss";

const DataGrid: React.FC = () => {
    const [currentColumn, setCurrentColumn] = useState<IColumn>();
    const initialState: IColumn[] = [
        {id: 1, order: 1, row: 0, name: "Name"},
        {id: 2, order: 2, row: 0, name: "Email"},
        {id: 3, order: 3, row: 0, name: "Phone"},
        {id: 4, order: 4, row: 0, name: "Date of birth"},
        {id: 5, order: 5, row: 0, name: "Department"},
        {id: 6, order: 6, row: 0, name: "Salary"}
    ];

    const [columns, setColumns] = useState<IColumn[]>(initialState);

    const data: IColumn[] = [
        {id: 11, order: 1, row: 1, name: "name1"},
        {id: 12, order: 2, row: 1, name: "email1"},
        {id: 13, order: 3, row: 1, name: "phone1"},
        {id: 14, order: 4, row: 1, name: "birth1"},
        {id: 15, order: 5, row: 1, name: "department1"},
        {id: 16, order: 6, row: 1, name: "salary1"},

        {id: 21, order: 1, row: 2, name: "name2"},
        {id: 22, order: 2, row: 2, name: "email2"},
        {id: 23, order: 3, row: 2, name: "phone2"},
        {id: 24, order: 4, row: 2, name: "birth2"},
        {id: 25, order: 5, row: 2, name: "department2"},
        {id: 26, order: 6, row: 2, name: "salary2"},

        {id: 31, order: 1, row: 3, name: "name3"},
        {id: 32, order: 2, row: 3, name: "email3"},
        {id: 33, order: 3, row: 3, name: "phone3"},
        {id: 34, order: 4, row: 3, name: "birth3"},
        {id: 35, order: 5, row: 3, name: "department3"},
        {id: 36, order: 6, row: 3, name: "salary3"},

        {id: 41, order: 1, row: 4, name: "name4"},
        {id: 42, order: 2, row: 4, name: "email4"},
        {id: 43, order: 3, row: 4, name: "phone4"},
        {id: 44, order: 4, row: 4, name: "birth4"},
        {id: 45, order: 5, row: 4, name: "department4"},
        {id: 46, order: 6, row: 4, name: "salary4"},

        {id: 51, order: 1, row: 5, name: "name5"},
        {id: 52, order: 2, row: 5, name: "email5"},
        {id: 53, order: 3, row: 5, name: "phone5"},
        {id: 54, order: 4, row: 5, name: "birth5"},
        {id: 55, order: 5, row: 5, name: "department5"},
        {id: 56, order: 6, row: 5, name: "salary5"},
    ];

    const [dataColumns, setDataColumns] = useState<IColumn[]>(data);

    const dropColumnHandler = (col: IColumn) => {
        setColumns(columns.map(c => {
            if (c.order === col.order) {
                return {...c, order: currentColumn?.order ?? 1};
            }
            if (c.order === currentColumn?.order ?? 1) {
                return {...c, order: col.order};
            }
            return c;
        }));

        setDataColumns(dataColumns.map(c => {
            if (c.order === col.order) {
                return {...c, order: currentColumn?.order ?? 1};
            }
            if (c.order === currentColumn?.order ?? 1) {
                return {...c, order: col.order};
            }
            return c;
        }));
    }

    const sortColumns = (a: IColumn, b: IColumn): number => {
        if (a.order > b.order)
            return 1;
        else
            return -1;
    }

    const sortDataColumns = (a: IColumn, b: IColumn): number => {
        if (a.row === b.row) {
            return a.order > b.order ? 1 : -1
        } else {
            return a.row < b.row ? -1 : 1;
        }
    }

    return (
        <div className="grid">
            {
                columns.sort(sortColumns).map((col) => (
                    <Column 
                        key={col.id} 
                        column={col} 
                        width={100}
                        height={50}
                        setCurrent={setCurrentColumn}
                        dropColumn={dropColumnHandler}
                    />
                ))
            }
            {
                dataColumns.sort(sortDataColumns).map((col) => (
                    <div 
                        key={col.id}
                        className="grid-column-data"
                    >
                        {col.name}
                    </div>
                ))
            }
        </div>
    );
}

export default DataGrid;
