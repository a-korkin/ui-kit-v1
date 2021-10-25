import React from "react";
import Button from "../../ui/Button";
import DropDown from "../../ui/DropDown";
import Input from "../../ui/Input";
// import Select from "../../ui/Select";

import "./App.scss";

const App: React.FC = () => {
    const options = new Map<string, string>([
        ["1", "automobiles"],
        ["2", "animations"],
        ["3", "technology"],
        ["4", "art"],
        ["5", "sports"],
        ["6", "news"],
        ["7", "music"]
    ]);

    return (
        <>
        <h1>UI kit App</h1>
        <div className="container">
            <div>
                <Button>Submit</Button>
            </div>
            <Input label="Search" />
            <DropDown label="Select" options={options} />
            {/* <Select options={options} name="category" /> */}
            {/* <Select options={options} name="other_category" searchable={true} /> */}
        </div>
        </>
    );
}

export default App;
