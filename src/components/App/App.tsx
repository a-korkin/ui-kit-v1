import React from "react";
import Button from "../../ui/Button";

import "./App.scss";

const App: React.FC = () => {
    return (
        <>
        <h1>UI kit App</h1>
        <div className="container">
            <Button>Submit</Button>
        </div>
        </>
    );
}

export default App;
