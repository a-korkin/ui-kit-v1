import React, { useState } from "react";
import { IColumn, SortDirections } from "../../models";
import { ResizableBox } from 'react-resizable';
import { FaSortUp, FaSortDown} from "react-icons/fa";

interface ICellProps {
    group: boolean;
    column: IColumn;
    width: number;
    height: number;
    sorted: boolean;
    setCurrent: (current: IColumn) => void;
    dropColumn: (col: IColumn) => void;
    sortColumn: (col: IColumn, direction: SortDirections) => void;
}

const Header: React.FC<ICellProps> = ({
    column, width, height, group,
    sorted, setCurrent, dropColumn, sortColumn}) => {

    const [sortable, setSortable] = useState<boolean>(false);
    const [sortDirection, setSortDirection] = useState<SortDirections>();

    const dragEventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, col: IColumn) => {
        setCurrent(col);
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
            axis="x"
            minConstraints={[width, height]}
            className={group ? "hide": "header--resizable"}
        >
            <div 
                className="col-header"
                draggable={true}
                onDragStart={e => dragStartHandler(e, column)}
                onDragEnter={dragEventHandler}
                onDragLeave={dragEventHandler}
                onDragEnd={dragEventHandler}
                onDragOver={dragEventHandler}
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
