import Login from "./pages/Login";
import NewPool from "./pages/NewPool";
import PoolList from "./pages/PoolList";
import Home from "./pages/Home";

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";


export default function Routes() {

    return (
        <BrowserRouter basename="/pass-share">
            <Switch >
                <Route exact path="/login"> <Login /></Route>
                <Route exact path="/"> <Home /></Route>
                <Route exact path="/new-pool"> <NewPool /></Route>
                <Route exact path="/pool-list"> <PoolList /></Route>
            </Switch>
        </BrowserRouter>
    )

}