import React, { useCallback, useRef, useState } from "react";
import { IColumn } from "../../models";
import { useResizeDetector } from "react-resize-detector";
import { ResizableBox } from 'react-resizable';

interface IColumnProps {
    column: IColumn;
    setCurrent: (current: IColumn) => void;
    dropColumn: (col: IColumn) => void;
    resizeColumn: (col: IColumn) => void;
}

const Column: React.FC<IColumnProps> = ({column, setCurrent, dropColumn, resizeColumn}) => {
    // const [hold, setHold] = useState<boolean>(false);
    // const [positionX, setPositionX] = useState<number>(1);
    // const [width, setWidth] = useState<number>(100);

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

    // const {width, height, ref} = useResizeDetector({ onResize });


    const spanRef = useRef<HTMLSpanElement>(null);

    // const mouseMoveHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        
    //     console.log(hold);

    //     if (hold) {
    //         // console.log(spanRef.current?.clientWidth); //, positionX - e.screenX);
    //         // setWidth(spanRef.current?.clientWidth ?? 1 + positionX - e.screenX)

    //         setWidth((width + (positionX - e.screenX) * -1));
    //     }


    //     // console.log(width + (positionX - e.screenX) * -1);
    //     // setWidth(prevState => {
    //     //     return width + (positionX - e.screenX) * -1;
    //     // });
    // }

    // const mouseDownHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    //     setHold(true);
    //     setPositionX(e.screenX);
    //     console.log("click on");
    // }

    // const mouseUpHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    //     setHold(false);
    //     // console.log("click off");
    // }

    return (
        <ResizableBox className="grid-column" width={200} height={200} 
            minConstraints={[100, 100]} maxConstraints={[300, 300]}>
            <span>Contents</span>
        </ResizableBox>

        // <div 
        //     // ref={ref}
        //     className="grid-column"
        //     // draggable={true}
        //     onDragStart={e => dragStartHandler(e, column)}
        //     onDragLeave={dragLeaveHandler}
        //     onDragEnd={dragEndHandler}
        //     onDragOver={dragOverHandler}
        //     onDrop={e => dropHandler(e, column)}
        //     style={{width: width}}
        // >
        //     <span 
        //         ref={spanRef}
        //         className="resize-line" 
        //         // onDrag={e => console.log("drag")}
        //         onDragStart={e => setHold(true)}
        //         onDragEnd={e => setHold(false)}
        //         onMouseMove={e => mouseMoveHandler(e)}
        //         // onMouseDown={e => mouseDownHandler(e)}
        //         // onMouseUp={e => mouseUpHandler(e)}
        //         // onMouseUpCapture={e => console.log("test")}
        //         // onMouseOver={e => console.log("test")}
        //     ></span>
        //     {column.name}
        //     {/* {column.name} {width} {height} */}
        // </div>
    );
}

export default Column;
