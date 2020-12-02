
import React from "react";
import Loadable from "~/components/Loadable/index"

import { ConnectedRouter } from 'connected-react-router';
import {Route, BrowserRouter} from "react-router-dom";
import {history} from "../store/index"
import Home from "~/pages/home/Home"
import About from "~/pages/about/About"
// const Home=Loadable(()=>import(/* webpackChunkName: "Home" */ "../pages/home/Home"))

// const About=Loadable(()=>import(/* webpackChunkName: "About" */"../pages/about/About"))

export default (
    <ConnectedRouter history={history}>
        <BrowserRouter>
            <Route path={["//react16","//"]} exact strict={false} component={Home} />
            <Route path="/about-react" component={About} />
        </BrowserRouter>
    </ConnectedRouter>
)