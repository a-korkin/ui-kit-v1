import React from "react";
import { ResizableBox } from "react-resizable";

import "./pages.scss";

const Test: React.FC = () => {

    return (
        <ResizableBox 
            height={300}
            width={300}
            axis={"x"}
        >
            <div className="box"></div>
        </ResizableBox>

    //     <Resizable 
    //         height={300} 
    //         width={300}
    //         axis={"y"}
    //     >
    //         <div className="box" style={{width: 300 + 'px', height: 300 + 'px'}}>
    //             <span>Contents</span>
    //         </div>
    //   </Resizable>
    );
}

export default Test;