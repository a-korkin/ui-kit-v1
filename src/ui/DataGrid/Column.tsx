import React from "react";
import { IColumn } from "../../models";
import { ResizableBox } from 'react-resizable';

interface IColumnProps {
    column: IColumn;
    width: number;
    height: number;
    setCurrent: (current: IColumn) => void;
    dropColumn: (col: IColumn) => void;
}

const Column: React.FC<IColumnProps> = ({column, width, height, setCurrent, dropColumn}) => {
    
    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, col: IColumn) => {
        setCurrent(col);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>, col: IColumn) => {
        e.preventDefault();
        dropColumn(col);
    }
    return (
        <ResizableBox 
            width={width} 
            height={height} 
            axis="x">
            <div 
                className="grid-column"
                draggable={true}
                onDragStart={e => dragStartHandler(e, column)}
                onDragLeave={dragLeaveHandler}
                onDragEnd={dragEndHandler}
                onDragOver={dragOverHandler}
                onDrop={e => dropHandler(e, column)}
            >
                {column.name}
            </div>
        </ResizableBox>
    );
}

export default Column;
