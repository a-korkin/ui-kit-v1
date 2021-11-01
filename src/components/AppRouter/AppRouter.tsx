import React from "react";
import { Switch, Route } from "react-router-dom";
import Buttons from "../../pages/Buttons";
import Checkboxes from "../../pages/Checkboxes";
import DataGridPage from "../../pages/DataGrid";
import DatePickers from "../../pages/DatePickers";
import Form from "../../pages/Form";
import Inputs from "../../pages/Inputs";
import Selects from "../../pages/Selects";
import Test from "../../pages/Test";

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Test} exact={true} />
            <Route path="/buttons" component={Buttons} exact={true} />
            <Route path="/inputs" component={Inputs} exact={true} />
            <Route path="/selects" component={Selects} exact={true} />
            <Route path="/checkboxes" component={Checkboxes} exact={true} />
            <Route path="/datepickers" component={DatePickers} exact={true} />
            <Route path="/form" component={Form} exact={true} />
            <Route path="/datagrid" component={DataGridPage} exact={true} />
        </Switch>
    );
}

export default AppRouter;
