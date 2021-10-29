import React from "react";
import Button from "../ui/Button";
import "./pages.scss";

const Buttons: React.FC = () => {
    return (
        <div className="pages-button">
            <Button classes="btn">Submit</Button>
            <Button classes="btn btn-primary">Submit</Button>
            <Button classes="btn btn-danger">Submit</Button>
            <Button classes="btn btn-warning">Submit</Button>
            <Button classes="btn btn-success">Submit</Button>
        </div>
    );
}

export default Buttons;
