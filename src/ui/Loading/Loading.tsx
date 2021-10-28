import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./Loading.scss";

const Loading: React.FC = () => {
    return (
        <div className="loading">
            <AiOutlineLoading3Quarters />
        </div>
    );
}

export default Loading;
