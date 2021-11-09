import React, { useState } from "react";
import { IColumn, SortDirections } from "../../models";
import { ResizableBox } from 'react-resizable';
import { FaSortUp, FaSortDown} from "react-icons/fa";

interface IColumnProps {
    column: IColumn;
    width: number;
    height: number;
    sorted: boolean;
    setCurrent: (current: IColumn) => void;
    dropColumn: (col: IColumn) => void;
    sortColumn: (col: IColumn, direction: SortDirections) => void;
}

const Column: React.FC<IColumnProps> = ({column, width, height, sorted, setCurrent, dropColumn, sortColumn}) => {

    const [sortable, setSortable] = useState<boolean>(false);
    const [sortDirection, setSortDirection] = useState<SortDirections>();

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

    const colClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setSortable(true);

        let newDirection: SortDirections;

        if (sortDirection === SortDirections.ASC) {
            newDirection = SortDirections.DESC;
        } else {
            newDirection = SortDirections.ASC; 
        }

        setSortDirection(newDirection);
        sortColumn(column, newDirection);
    }

    return (
        <ResizableBox 
            width={width} 
            height={height} 
            axis="x">
            <div 
                className="col-header"
                draggable={true}
                onDragStart={e => dragStartHandler(e, column)}
                onDragLeave={dragLeaveHandler}
                onDragEnd={dragEndHandler}
                onDragOver={dragOverHandler}
                onDrop={e => dropHandler(e, column)}
                onClick={e => colClickHandler(e)}
            >
                {column.value}
                <div 
                    className={sortable && sorted ? "col-header-sort allow" : "col-header-sort"}>
                    <span 
                        className={sortDirection === SortDirections.ASC ? 
                            "col-header-sort__icon active" : "col-header-sort__icon"}
                        onClick={e => sortColumn(column, sortDirection ?? SortDirections.ASC)}
                    >
                        <FaSortUp />
                    </span>
                    <span 
                        className={sortDirection === SortDirections.DESC ? 
                            "col-header-sort__icon active" : "col-header-sort__icon"}
                        onClick={e => sortColumn(column, sortDirection ?? SortDirections.DESC)}
                    >
                        <FaSortDown />
                    </span>
                </div>
            </div>
        </ResizableBox>
    );
}

export default Column;
