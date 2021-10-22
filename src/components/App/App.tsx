import React from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

import "./App.scss";

const App: React.FC = () => {
    return (
        <>
        <h1>UI kit App</h1>
        <div className="container">
            <div>
                <Button>Submit</Button>
            </div>
            <br />
            <div>
                <Input label="Search" />
            </div>
        </div>
        </>
    );
}

export default App;
