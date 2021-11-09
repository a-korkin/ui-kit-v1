import React from "react";
import { ResizableBox } from 'react-resizable';
import Checkbox from "../Checkbox";

import "./DataGrid.scss";

const DataGrid: React.FC = () => {

    const data = {
        headers: [
            {name: "name", slug: "name"},
            {name: "email", slug: "email"},
            {name: "phone", slug: "phone"},
            {name: "birthdate", slug: "birthdate"}
        ],
        rows: [
            {name: "name1", email: "email1", phone: "phone1", birthdate: "birthdate1"},
            {name: "name2", email: "email2", phone: "phone2", birthdate: "birthdate2"},
            {name: "name3", email: "email3", phone: "phone3", birthdate: "birthdate3"},
            {name: "name4", email: "email4", phone: "phone4", birthdate: "birthdate4"},
            {name: "name5", email: "email5", phone: "phone5", birthdate: "birthdate1"}
        ]
    }

    console.log(data);
    return (
        <div className="grid">
            <div className="grid-headers">
                <div className="row">
                    <div className="checker">
                        <Checkbox checked={false} id="1" label="" onChange={(d) => {}} />
                    </div>
                    {
                        data.headers.map((header) => 
                            <ResizableBox
                                width={100}
                                height={30}
                                minConstraints={[100,30]}
                                axis="x"
                            >
                                <div 
                                    className="cell"
                                    draggable
                                >
                                    {header.name}
                                </div>
                            </ResizableBox>
                        )
                    }
                </div>
            </div>

            <div className="grid-data">
                {
                    data.rows.map((row) => 
                        Object.keys(row).map((key, index) => 
                            <div key={key}>{row.email}</div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default DataGrid;
