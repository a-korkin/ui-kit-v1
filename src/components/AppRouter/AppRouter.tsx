import React from "react";
import { Switch, Route } from "react-router-dom";
import Buttons from "../../pages/Buttons";
import Inputs from "../../pages/Inputs";

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route path="/buttons" component={Buttons} />
            <Route path="/inputs" component={Inputs} />
        </Switch>
    );
}

export default AppRouter;
