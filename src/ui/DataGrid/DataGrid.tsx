import React, { useState } from "react";

import "./DataGrid.scss";

const DataGrid: React.FC = () => {
    interface Column {
        id: number;
        order: number;
        text: string;
    }

    const initialState: Column[] = [
        {id: 1, order: 1, text: "Name"},
        {id: 2, order: 2, text: "Email"},
        {id: 3, order: 3, text: "Phone"},
        {id: 4, order: 4, text: "Date of birth"},
        {id: 5, order: 5, text: "Department"},
        {id: 6, order: 6, text: "Salary"}
    ];

    const [columns, setColumns] = useState<Column[]>(initialState);
    const [currentColumn, setCurrentColumn] = useState<Column>();

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, col: Column) => {
        setCurrentColumn(col);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.style.background = "white";
    }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.style.background = "white";
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.style.background = "lightgray";
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>, col: Column) => {
        e.preventDefault();
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

    const sortColumns = (a: Column, b: Column): number => {
        if (a.order > b.order)
            return 1;
        else
            return -1;
    }

    return (
        <div className="grid">
            {
                columns.sort(sortColumns).map(col => (
                    <div 
                        key={col.id}
                        draggable={true}
                        className="grid-column" 
                        onDragStart={e => dragStartHandler(e, col)}
                        onDragLeave={dragLeaveHandler}
                        onDragEnd={dragEndHandler}
                        onDragOver={dragOverHandler}
                        onDrop={e => dropHandler(e, col)}
                    >
                        {col.text}
                    </div>
                ))
            }
        </div>
    );
}

export default DataGrid;
