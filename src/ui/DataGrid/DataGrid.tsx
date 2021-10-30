import React, { useState } from "react";

import "./DataGrid.scss";

const DataGrid: React.FC = () => {
    const elements: string[] = [
        "Name", "Email", "Phone", 
        "Date of birth", "Department", "Salary"
    ];
    const [columns, setColumns] = useState();

    return (
        <div className="grid">
            {
                elements.map(el => (
                    <div 
                        key={el}
                        className="grid-column" 
                        // onDrag={e => console.log(el)}
                        onDragStart={e => console.log(el)}
                    >
                        {el}
                    </div>
                ))
            }
        </div>
    );
}

export default DataGrid;
