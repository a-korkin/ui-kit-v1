import React, { useRef, useState } from "react";
import "./pages.scss";

interface TestState {
    startX: number;
    startY: number;
    startWidth: number;
    startHeight: number;
}

const Test: React.FC = () => {
    const [state, setState] = useState<TestState>({
        startX: 0,
        startY: 0,
        startWidth: 0,
        startHeight: 0
    });

    const [width, setWidth] = useState<number>(100);
    const [isOk, setIsOk] = useState<boolean>(false);

    const main = useRef<HTMLDivElement>(null);
    
    const doDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isOk) {
            console.log(state.startWidth, e.clientX, state.startX);
            setWidth(state.startWidth + e.clientX - state.startX);
        }
    }

    const stopDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsOk(false);
    }

    const initDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        setState(prevState => ({
            ...prevState, 
            startX: e.clientX,
            startY: e.clientY,
            startWidth: main.current?.clientWidth ?? 10
        }));

        console.log(e.clientX, main.current?.clientWidth);
        setIsOk(true);
    }


    return (
        <div className="test"
            ref={main}
            style={{width: width}}
            >
            <div 
                className="scroll"
                onMouseDown={e => initDrag(e)}
                onMouseUp={e => stopDrag(e)}
                onMouseMove={e => doDrag(e)}
                onMouseLeave={e => stopDrag(e)}
            >
            </div>
        </div>
    );
}

export default Test;
