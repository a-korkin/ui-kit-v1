import React from "react";
import { ICell, IColumn, Types } from "../models";
import DataGrid from "../ui/DataGrid";
// import DataGrid from "../ui/DataGrid2";

const DataGridPage: React.FC = () => {
    // const headers: ICell[] = [
    //     {id: "1", col: 1, row: 0, value: "Name"},
    //     {id: "2", col: 2, row: 0, value: "Email"},
    //     {id: "3", col: 3, row: 0, value: "Phone"},
    //     {id: "4", col: 4, row: 0, value: "Date of birth"},
    //     {id: "5", col: 5, row: 0, value: "Department"},
    //     {id: "6", col: 6, row: 0, value: "Salary"}
    // ];

    const headers: IColumn[] = [
        {id: 1, type: Types.string, value: "Name"},
        {id: 2, type: Types.string, value: "Email"},
        {id: 3, type: Types.string, value: "Phone"},
        {id: 4, type: Types.string, value: "Date of birth"},
        {id: 5, type: Types.string, value: "Department"},
        {id: 6, type: Types.string, value: "Salary"},
    ];

    const data: ICell[] = [
        {id: "11", col: 1, row: 1, value: "Hedda De laYgleasis"},
        {id: "12", col: 2, row: 1, value: "hedda.delaygles@skinix.com"},
        {id: "13", col: 3, row: 1, value: "627-273-1865"},
        {id: "14", col: 4, row: 1, value: "05/18/1988"},
        {id: "15", col: 5, row: 1, value: "Accounting and Finance"},
        {id: "16", col: 6, row: 1, value: "$ 70.865"},

        {id: "21", col: 1, row: 2, value: "Kaleena Swapp"},
        {id: "22", col: 2, row: 2, value: "kaleena.swapp@mycat.com"},
        {id: "23", col: 3, row: 2, value: "512-486-378"},
        {id: "24", col: 4, row: 2, value: "07/03/1971"},
        {id: "25", col: 5, row: 2, value: "Research and Development"},
        {id: "26", col: 6, row: 2, value: "$ 119.583"},

        {id: "31", col: 1, row: 3, value: "Solly Cheevers"},
        {id: "32", col: 2, row: 3, value: "solly.cheevers@linkbridge.com"},
        {id: "33", col: 3, row: 3, value: ""},
        {id: "34", col: 4, row: 3, value: "03/05/1975"},
        {id: "35", col: 5, row: 3, value: "Production"},
        {id: "36", col: 6, row: 3, value: "$ 99.982"},

        {id: "41", col: 1, row: 4, value: "Lorna Dupoy"},
        {id: "42", col: 2, row: 4, value: "lorna.dupoy@rhynyx.com"},
        {id: "43", col: 3, row: 4, value: "304-751-5480"},
        {id: "44", col: 4, row: 4, value: "10/20/1998"},
        {id: "45", col: 5, row: 4, value: "Production"},
        {id: "46", col: 6, row: 4, value: "$ 128.316"},

        {id: "51", col: 1, row: 5, value: "Hieronymus De la Cote"},
        {id: "52", col: 2, row: 5, value: "hieronymous.dela@dablist.com"},
        {id: "53", col: 3, row: 5, value: ""},
        {id: "54", col: 4, row: 5, value: "07/03/1971"},
        {id: "55", col: 5, row: 5, value: "Research and Development"},
        {id: "56", col: 6, row: 5, value: "$ 149.687"},

        {id: "57", col: 1, row: 6, value: "Delia Pinks"},
        {id: "58", col: 2, row: 6, value: "delia.pinks@photojam.com"},
        {id: "59", col: 3, row: 6, value: "912-707-4206"},
        {id: "60", col: 4, row: 6, value: "11/21/1986"},
        {id: "61", col: 5, row: 6, value: "Research and Development"},
        {id: "62", col: 6, row: 6, value: "$ 90.993"},

        {id: "63", col: 1, row: 7, value: "Becki Manville"},
        {id: "64", col: 2, row: 7, value: "becki.manville@wikivu.com"},
        {id: "65", col: 3, row: 7, value: "315-129-5760"},
        {id: "66", col: 4, row: 7, value: "06/21/1967"},
        {id: "67", col: 5, row: 7, value: "Research and Development"},
        {id: "68", col: 6, row: 7, value: "$ 112.515"},

        {id: "69", col: 1, row: 8, value: "Paige Goodin"},
        {id: "70", col: 2, row: 8, value: "paige.goodin@dabeed.com"},
        {id: "71", col: 3, row: 8, value: "413-419-4075"},
        {id: "72", col: 4, row: 8, value: "07/03/1971"},
        {id: "73", col: 5, row: 8, value: "Accounting and Finance"},
        {id: "74", col: 6, row: 8, value: "$ 75.897"},
    ];

    // const data2: IRow[] = [
    //     {
    //         cells: [
    //             {id: 11, col: 1, row: 1, value: "Hedda De laYgleasis"},
    //             {id: 12, col: 2, row: 1, value: "hedda.delaygles@skinix.com"},
    //             {id: 13, col: 3, row: 1, value: "627-273-1865"},
    //             {id: 14, col: 4, row: 1, value: "05/18/1988"},
    //             {id: 15, col: 5, row: 1, value: "Accounting and Finance"},
    //             {id: 16, col: 6, row: 1, value: "$ 70.865"},
    //         ]
    //     },

    //     {
    //         cells: [
    //             {id: 21, col: 1, row: 2, value: "Kaleena Swapp"},
    //             {id: 22, col: 2, row: 2, value: "kaleena.swapp@mycat.com"},
    //             {id: 23, col: 3, row: 2, value: "512-486-378"},
    //             {id: 24, col: 4, row: 2, value: "07/03/1971"},
    //             {id: 25, col: 5, row: 2, value: "Research and Development"},
    //             {id: 26, col: 6, row: 2, value: "$ 119.583"},
    //         ]
    //     },

    //     {
    //         cells: [
    //             {id: 31, col: 1, row: 3, value: "Solly Cheevers"},
    //             {id: 32, col: 2, row: 3, value: "solly.cheevers@linkbridge.com"},
    //             {id: 33, col: 3, row: 3, value: ""},
    //             {id: 34, col: 4, row: 3, value: "03/05/1975"},
    //             {id: 35, col: 5, row: 3, value: "Production"},
    //             {id: 36, col: 6, row: 3, value: "$ 99.982"},
    //         ]
    //     },

    //     {
    //         cells: [
    //             {id: 41, col: 1, row: 4, value: "Lorna Dupoy"},
    //             {id: 42, col: 2, row: 4, value: "lorna.dupoy@rhynyx.com"},
    //             {id: 43, col: 3, row: 4, value: "304-751-5480"},
    //             {id: 44, col: 4, row: 4, value: "10/20/1998"},
    //             {id: 45, col: 5, row: 4, value: "Production"},
    //             {id: 46, col: 6, row: 4, value: "$ 128.316"},
    //         ]
    //     },

    //     {
    //         cells: [
    //             {id: 51, col: 1, row: 5, value: "Hieronymus De la Cote"},
    //             {id: 52, col: 2, row: 5, value: "hieronymous.dela@dablist.com"},
    //             {id: 53, col: 3, row: 5, value: ""},
    //             {id: 54, col: 4, row: 5, value: "02/22/1991"},
    //             {id: 55, col: 5, row: 5, value: "Research and Development"},
    //             {id: 56, col: 6, row: 5, value: "$ 149.687"},
    //         ]
    //     },
    // ];

    return (
        <div className="pages-grid">
            <DataGrid headers={headers} data={data} />
            {/* <DataGrid /> */}
        </div>
    );
}

export default DataGridPage;
