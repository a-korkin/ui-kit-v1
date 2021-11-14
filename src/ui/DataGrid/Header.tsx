import React, { useState } from "react";
import { ICell, IColumn, SortDirections } from "../../models";
import { ResizableBox } from 'react-resizable';
import { FaSortUp, FaSortDown} from "react-icons/fa";

interface ICellProps {
    group: boolean;
    // column: ICell;
    column: IColumn;
    width: number;
    height: number;
    sorted: boolean;
    // setCurrent: (current: ICell) => void;
    setCurrent: (current: IColumn) => void;
    // dropColumn: (col: ICell) => void;
    dropColumn: (col: IColumn) => void;
    // sortColumn: (col: ICell, direction: SortDirections) => void;
    sortColumn: (col: IColumn, direction: SortDirections) => void;
}

const Header: React.FC<ICellProps> = ({
    column, width, height, group,
    sorted, setCurrent, dropColumn, sortColumn}) => {

    const [sortable, setSortable] = useState<boolean>(false);
    const [sortDirection, setSortDirection] = useState<SortDirections>();

    // const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, col: ICell) => {
    //     setCurrent(col);
    // }

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, col: IColumn) => {
        setCurrent(col);
    }
    
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    
    // const dragEndHandler = (e: React.DragEvent<HTMLDivElement>, col: ICell) => {
    //     e.preventDefault();
    // }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    // const dropHandler = (e: React.DragEvent<HTMLDivElement>, col: ICell) => {
    //     e.preventDefault();
    //     dropColumn(col);
    // }

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
            axis="x"
            minConstraints={[width, height]}
            className={group ? "hide": "header--resizable"}
        >
            <div 
                className="col-header"
                draggable={true}
                onDragStart={e => dragStartHandler(e, column)}
                onDragEnter={dragEnterHandler}
                onDragLeave={dragLeaveHandler}
                onDragEnd={dragEndHandler}
                onDragOver={dragOverHandler}
                onDrop={e => dropHandler(e, column)}
                onClick={e => colClickHandler(e)}
            >
                {column.value}
                <div 
                    className={sortable && sorted ? "col-header-sort allow" : "col-header-sort"}
                >
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

export default Header;
