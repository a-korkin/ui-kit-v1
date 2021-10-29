import React from "react";
import { Switch, Route } from "react-router-dom";
import Buttons from "../../pages/Buttons";

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route path="/buttons" component={Buttons} />
        </Switch>
    );
}

export default AppRouter;
