import React from "react";
import { Switch, Route } from "react-router-dom";
import Buttons from "../../pages/Buttons";
import Checkboxes from "../../pages/Checkboxes";
import DataGridPage from "../../pages/DataGrid";
import DatePickers from "../../pages/DatePickers";
import Form from "../../pages/Form";
import Inputs from "../../pages/Inputs";
import Selects from "../../pages/Selects";

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route path="/buttons" component={Buttons} />
            <Route path="/inputs" component={Inputs} />
            <Route path="/selects" component={Selects} />
            <Route path="/checkboxes" component={Checkboxes} />
            <Route path="/datepickers" component={DatePickers} />
            <Route path="/form" component={Form} />
            <Route path="/datagrid" component={DataGridPage} />
        </Switch>
    );
}

export default AppRouter;
