export interface IDictionary {
    id: string;
    value: string;
}

export interface IMonth {
    id: number;
    name: string;
    days: number;
    code: number;
}

export interface IDate {
    year: number;
    month?: IMonth;
    day: number;
}

export interface IAppState {
    input: string;
    maskInput: string;
    select: IDictionary;
    multiSelect: IDictionary[],
    checkbox: boolean;
    toggle: boolean;
    date: Date;
}

export enum Types {
    string = "string",
    boolean = "boolean",
    date = "date"
}

export interface ICell {
    id: string;
    col: number;
    row: number;
    value: any;
}

export interface IColumn {
    id: number;
    order?: number;
    type: Types;
    value: string;
    child?: IColumn;
}

export interface IRow {
    cells: ICell[];
}

export enum SortDirections {
    ASC = "ASC",
    DESC = "DESC"
}

