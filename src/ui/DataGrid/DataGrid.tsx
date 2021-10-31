import React, { useState } from "react";
import { IColumn } from "../../models";
import Column from "./Column";

import "./DataGrid.scss";

const DataGrid: React.FC = () => {
    const [currentColumn, setCurrentColumn] = useState<IColumn>();
    const initialState: IColumn[] = [
        {id: 1, order: 1, name: "Name"},
        {id: 2, order: 2, name: "Email"},
        {id: 3, order: 3, name: "Phone"},
        {id: 4, order: 4, name: "Date of birth"},
        {id: 5, order: 5, name: "Department"},
        {id: 6, order: 6, name: "Salary"}
    ];

    const [columns, setColumns] = useState<IColumn[]>(initialState);
    // const data: string[] = [
    //     "name1", "email1", "phone1", "birth1", "department1", "salary1",
    //     "name2", "email2", "phone2", "birth2", "department2", "salary2",
    //     "name3", "email3", "phone3", "birth3", "department3", "salary3",
    //     "name4", "email4", "phone4", "birth4", "department4", "salary4",
    //     "name5", "email5", "phone5", "birth5", "department5", "salary5",
    //     "name6", "email6", "phone6", "birth6", "department6", "salary6",
    //     "name7", "email7", "phone7", "birth7", "department7", "salary7"
    // ];

    const data: IColumn[] = [
        {id: 1, order: 1, name: "name1"},
        {id: 2, order: 2, name: "email1"},
        {id: 3, order: 3, name: "phone1"},
        {id: 4, order: 4, name: "birth1"},
        {id: 5, order: 5, name: "department1"},
        {id: 6, order: 6, name: "salary1"},

        {id: 1, order: 1, name: "name2"},
        {id: 2, order: 2, name: "email2"},
        {id: 3, order: 3, name: "phone2"},
        {id: 4, order: 4, name: "birth2"},
        {id: 5, order: 5, name: "department2"},
        {id: 6, order: 6, name: "salary2"},

        {id: 1, order: 1, name: "name3"},
        {id: 2, order: 2, name: "email3"},
        {id: 3, order: 3, name: "phone3"},
        {id: 4, order: 4, name: "birth3"},
        {id: 5, order: 5, name: "department3"},
        {id: 6, order: 6, name: "salary3"},

        {id: 1, order: 1, name: "name4"},
        {id: 2, order: 2, name: "email4"},
        {id: 3, order: 3, name: "phone4"},
        {id: 4, order: 4, name: "birth4"},
        {id: 5, order: 5, name: "department4"},
        {id: 6, order: 6, name: "salary4"},

        {id: 1, order: 1, name: "name5"},
        {id: 2, order: 2, name: "email5"},
        {id: 3, order: 3, name: "phone5"},
        {id: 4, order: 4, name: "birth5"},
        {id: 5, order: 5, name: "department5"},
        {id: 6, order: 6, name: "salary5"},
    ];

    const [dataColumns, setDataColumns] = useState<IColumn[]>(data);

    const dropColumnHandler = (col: IColumn) => {
        setColumns(columns.map(c => {
            if (c.id === col.id) {
                return {...c, order: currentColumn?.order ?? 1};
            }
            if (c.id === currentColumn?.id ?? 1) {
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

    const resizeColumnHandler = (column: IColumn) => {
        console.log(column);
    }

    return (
        <div className="grid">
            {
                columns.sort(sortColumns).map((col) => (
                    <Column 
                        key={col.id} 
                        column={col} 
                        setCurrent={setCurrentColumn}
                        dropColumn={dropColumnHandler}
                        resizeColumn={resizeColumnHandler}
                    />
                ))
            }
            {
                dataColumns.map((col) => (
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
