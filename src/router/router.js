
import React from "react";
import Loadable from "~/components/Loadable/index"

import { ConnectedRouter } from 'connected-react-router';
import {Route, BrowserRouter} from "react-router-dom";
import {history} from "~/store/historys"
// import Home from "~/pages/home/Home"
// import Home1 from "~/pages/home1/Home"
// import About from "~/pages/about/About"
const Home=Loadable(()=>import(/* webpackChunkName: "Home" */ "~/pages/home/Home"))
const Home1 =Loadable(()=>import(/* webpackChunkName: "Home1" */ "~/pages/home1/Home"))
const About=Loadable(()=>import(/* webpackChunkName: "About" */"~/pages/about/About"))

export default (
    <ConnectedRouter history={history}>
        <BrowserRouter>
            <Route path={["//react16","//"]} exact strict={false} component={Home} />
            <Route path={window.__POWERED_BY_QIANKUN__? "/mshop-about-react":"/about-react"} component={About} />
            <Route path={window.__POWERED_BY_QIANKUN__? "/mshop-about-react1":"/about-react1"} component={Home1} />
        </BrowserRouter>
    </ConnectedRouter>
)