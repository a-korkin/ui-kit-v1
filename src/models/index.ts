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

export interface IColumn {
    id: number;
    col: number;
    row: number;
    name: string;
}

export enum SortDirections {
    ASC = "ASC",
    DESC = "DESC"
}

