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
        {id: 11, col: 1, row: 1, name: "Hedda De laYgleasis"},
        {id: 12, col: 2, row: 1, name: "hedda.delaygles@skinix.com"},
        {id: 13, col: 3, row: 1, name: "627-273-1865"},
        {id: 14, col: 4, row: 1, name: "05/18/1988"},
        {id: 15, col: 5, row: 1, name: "Accounting and Finance"},
        {id: 16, col: 6, row: 1, name: "$ 70.865"},

        {id: 21, col: 1, row: 2, name: "Kaleena Swapp"},
        {id: 22, col: 2, row: 2, name: "kaleena.swapp@mycat.com"},
        {id: 23, col: 3, row: 2, name: "512-486-378"},
        {id: 24, col: 4, row: 2, name: "07/03/1971"},
        {id: 25, col: 5, row: 2, name: "Research and Development"},
        {id: 26, col: 6, row: 2, name: "$ 119.583"},

        {id: 31, col: 1, row: 3, name: "Solly Cheevers"},
        {id: 32, col: 2, row: 3, name: "solly.cheevers@linkbridge.com"},
        {id: 33, col: 3, row: 3, name: ""},
        {id: 34, col: 4, row: 3, name: "03/05/1975"},
        {id: 35, col: 5, row: 3, name: "Production"},
        {id: 36, col: 6, row: 3, name: "$ 99.982"},

        {id: 41, col: 1, row: 4, name: "Lorna Dupoy"},
        {id: 42, col: 2, row: 4, name: "lorna.dupoy@rhynyx.com"},
        {id: 43, col: 3, row: 4, name: "304-751-5480"},
        {id: 44, col: 4, row: 4, name: "10/20/1998"},
        {id: 45, col: 5, row: 4, name: "Production"},
        {id: 46, col: 6, row: 4, name: "$ 128.316"},

        {id: 51, col: 1, row: 5, name: "Hieronymus De la Cote"},
        {id: 52, col: 2, row: 5, name: "hieronymous.dela@dablist.com"},
        {id: 53, col: 3, row: 5, name: ""},
        {id: 54, col: 4, row: 5, name: "02/22/1991"},
        {id: 55, col: 5, row: 5, name: "Research and Development"},
        {id: 56, col: 6, row: 5, name: "$ 149.687"},

        {id: 57, col: 1, row: 6, name: "Delia Pinks"},
        {id: 58, col: 2, row: 6, name: "delia.pinks@photojam.com"},
        {id: 59, col: 3, row: 6, name: "912-707-4206"},
        {id: 60, col: 4, row: 6, name: "11/21/1986"},
        {id: 61, col: 5, row: 6, name: "Research and Development"},
        {id: 62, col: 6, row: 6, name: "$ 90.993"},

        {id: 63, col: 1, row: 7, name: "Becki Manville"},
        {id: 64, col: 2, row: 7, name: "becki.manville@wikivu.com"},
        {id: 65, col: 3, row: 7, name: "315-129-5760"},
        {id: 66, col: 4, row: 7, name: "06/21/1967"},
        {id: 67, col: 5, row: 7, name: "Research and Development"},
        {id: 68, col: 6, row: 7, name: "$ 112.515"},

        {id: 69, col: 1, row: 8, name: "Paige Goodin"},
        {id: 70, col: 2, row: 8, name: "paige.goodin@dabeed.com"},
        {id: 71, col: 3, row: 8, name: "413-419-4075"},
        {id: 72, col: 4, row: 8, name: "01/11/1984"},
        {id: 73, col: 5, row: 8, name: "Accounting and Finance"},
        {id: 74, col: 6, row: 8, name: "$ 75.897"},
    ];

    return (
        <div className="pages-grid">
            <DataGrid headers={headers} data={data} />
        </div>
    );
}

export default DataGridPage;
