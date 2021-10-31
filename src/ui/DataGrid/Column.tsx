import React, { useCallback } from "react";
import { IColumn } from "../../models";
import { useResizeDetector } from "react-resize-detector";

interface IColumnProps {
    column: IColumn;
    setCurrent: (current: IColumn) => void;
    dropColumn: (col: IColumn) => void;
    resizeColumn: (col: IColumn) => void;
}

const Column: React.FC<IColumnProps> = ({column, setCurrent, dropColumn, resizeColumn}) => {

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

    const onResize = useCallback(() => {
        // console.log(`${ref.current.id} - ${ref.current.clientWidth}`);
        resizeColumn(column);
        // console.log(column);
    }, []);

    const {width, height, ref} = useResizeDetector({ onResize });

    return (
        <div 
            ref={ref}
            className="grid-column"
            draggable={true}
            onDragStart={e => dragStartHandler(e, column)}
            onDragLeave={dragLeaveHandler}
            onDragEnd={dragEndHandler}
            onDragOver={dragOverHandler}
            onDrop={e => dropHandler(e, column)}
        >
            {column.name} {width} {height}
        </div>
    );
}

export default Column;
