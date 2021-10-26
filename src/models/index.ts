export interface IDictionary {
    id: string;
    value: string;
}

export interface IMonth {
    id: number;
    name?: string;
}

export interface IDate {
    year: number;
    month: IMonth;
    day: number;
}
