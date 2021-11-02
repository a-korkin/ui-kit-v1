import React from "react";
import { IColumn } from "../models";
import DataGrid from "../ui/DataGrid";

const DataGridPage: React.FC = () => {
    const headers: IColumn[] = [
        {id: 1, col: 1, row: 0, name: "Name"},
        {id: 2, col: 2, row: 0, name: "Email"},
        {id: 3, col: 3, row: 0, name: "Phone"},
        {id: 4, col: 4, row: 0, name: "Date of birth"},
        {id: 5, col: 5, row: 0, name: "Department"},
        {id: 6, col: 6, row: 0, name: "Salary"}
    ];

    const data: IColumn[] = [
        {id: 11, col: 1, row: 1, name: "name1"},
        {id: 12, col: 2, row: 1, name: "email1"},
        {id: 13, col: 3, row: 1, name: "phone1"},
        {id: 14, col: 4, row: 1, name: "birth1"},
        {id: 15, col: 5, row: 1, name: "department1"},
        {id: 16, col: 6, row: 1, name: "salary1"},

        {id: 21, col: 1, row: 2, name: "name2"},
        {id: 22, col: 2, row: 2, name: "email2"},
        {id: 23, col: 3, row: 2, name: "phone2"},
        {id: 24, col: 4, row: 2, name: "birth2"},
        {id: 25, col: 5, row: 2, name: "department2"},
        {id: 26, col: 6, row: 2, name: "salary2"},

        {id: 31, col: 1, row: 3, name: "name3"},
        {id: 32, col: 2, row: 3, name: "email3"},
        {id: 33, col: 3, row: 3, name: "phone3"},
        {id: 34, col: 4, row: 3, name: "birth3"},
        {id: 35, col: 5, row: 3, name: "department3"},
        {id: 36, col: 6, row: 3, name: "salary3"},

        {id: 41, col: 1, row: 4, name: "name4"},
        {id: 42, col: 2, row: 4, name: "email4"},
        {id: 43, col: 3, row: 4, name: "phone4"},
        {id: 44, col: 4, row: 4, name: "birth4"},
        {id: 45, col: 5, row: 4, name: "department4"},
        {id: 46, col: 6, row: 4, name: "salary4"},

        {id: 51, col: 1, row: 5, name: "name5"},
        {id: 52, col: 2, row: 5, name: "email5"},
        {id: 53, col: 3, row: 5, name: "phone5"},
        {id: 54, col: 4, row: 5, name: "birth5"},
        {id: 55, col: 5, row: 5, name: "department5"},
        {id: 56, col: 6, row: 5, name: "salary5"},
    ];

    return (
        <div className="pages-grid">
            <DataGrid headers={headers} data={data} />
        </div>
    );
}

export default DataGridPage;
