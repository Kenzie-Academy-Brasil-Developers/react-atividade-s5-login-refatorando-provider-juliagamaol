import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>

            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}
