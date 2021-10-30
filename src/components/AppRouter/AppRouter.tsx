import React from "react";
import { Switch, Route } from "react-router-dom";
import Buttons from "../../pages/Buttons";
import DatePickers from "../../pages/DatePickers";
import Inputs from "../../pages/Inputs";
import Selects from "../../pages/Selects";

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route path="/buttons" component={Buttons} />
            <Route path="/inputs" component={Inputs} />
            <Route path="/selects" component={Selects} />
            <Route path="/datepickers" component={DatePickers} />
        </Switch>
    );
}

export default AppRouter;
