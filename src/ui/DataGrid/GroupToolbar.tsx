import React from "react";
import { ICell, IColumn } from "../../models";

interface IGroupToolbarProps {
    // headers: ICell[];
    headers: IColumn[];
    addGroup: () => void;
    // removeGroup: (header: ICell) => void;
    removeGroup: (header: IColumn) => void;
}

const GroupToolbar: React.FC<IGroupToolbarProps> = ({headers, addGroup, removeGroup}) => {
    // событие для того чтобы курсор был enabled
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    // группировка по столбцу
    const groupHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        addGroup();
    }

    // удаление группировки
    const removeGroupHandler = (e: React.MouseEvent<HTMLSpanElement>, header: IColumn) => {
        removeGroup(header);
    }
    // const removeGroupHandler = (e: React.MouseEvent<HTMLSpanElement>, header: ICell) => {
    //     removeGroup(header);
    // }

    return (
        <div 
            className="group-toolbar"
            onDragStart={e => dragHandler(e)}
            onDragEnter={e => dragHandler(e)}
            onDragLeave={e => dragHandler(e)}
            onDragEnd={e => dragHandler(e)}
            onDragOver={e => dragHandler(e)}
            onDrop={e => groupHandler(e)}
        >
            {
                headers.map(head => 
                    <div 
                        // key={head.col}
                        key={head.id}
                        className="group-toolbar__item"
                    >
                        {head.value}
                        <span 
                            className="remove"
                            onClick={e => removeGroupHandler(e, head)}
                        >&times;</span>
                    </div>
                )
            }
        </div>
    );
}

export default GroupToolbar;
