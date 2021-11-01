import React, { useCallback, useRef } from "react";
import { IColumn } from "../../models";
import { useResizeDetector } from "react-resize-detector";
// import { ResizableBox } from 'react-resizable';

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
        // console.log(`${ref.current.clientWidth}`);
    }, []);

    const {width, height, ref} = useResizeDetector({ onResize });


    const spanRef = useRef<HTMLSpanElement>(null);

    const mouseMoveHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        console.log(spanRef, "move");
    }

    const mouseDownHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        // console.log(e.currentTarget.style.width);
        console.log(spanRef.current?.clientWidth);
    }

    return (
        // <ResizableBox className="grid-column" width={100} height={100} onResize={e => console.log("dfsf")}>
        //     {column.name} {width} {height}
        // </ResizableBox>

        <div 
            // ref={ref}
            className="grid-column"
            // draggable={true}
            onDragStart={e => dragStartHandler(e, column)}
            onDragLeave={dragLeaveHandler}
            onDragEnd={dragEndHandler}
            onDragOver={dragOverHandler}
            onDrop={e => dropHandler(e, column)}
        >
            <span 
                ref={spanRef}
                className="resize-line" 
                onMouseMove={e => mouseMoveHandler(e)}
                onMouseDown={e => mouseDownHandler(e)}
                onMouseUp={e => console.log("up")}
            ></span>
            {column.name}
            {/* {column.name} {width} {height} */}
        </div>
    );
}

export default Column;
