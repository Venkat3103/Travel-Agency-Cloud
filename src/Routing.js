import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Home from "./components/Homepage";
import Kerala from "./components/Kerala";
import Andaman from "./components/Andaman";
import Goa from "./components/Goa";
import Kashmir from "./components/Kashmir";
import Coorg from "./components/Coorg";
import Shimla from "./components/Shimla";

export const HomeRoute = "/";
export const KeralaRoute = "/Kerala/";
export const AndamanRoute = "/Andaman/";
export const GoaRoute = "/Goa/";
export const KashmirRoute = "/Kashmir/";
export const CoorgRoute = "/Coorg/";
export const ShimlaRoute = "/Shimla/";

class Routing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path={HomeRoute} exact component={Home} />
        <Route path={KeralaRoute} component={Kerala} />
        <Route path={AndamanRoute} component={Andaman} />
        <Route path={GoaRoute} component={Goa} />
        <Route path={KashmirRoute} component={Kashmir} />
        <Route path={CoorgRoute} component={Coorg} />
        <Route path={ShimlaRoute} component={Shimla} />
      </React.Fragment>
    );
  }
}
export default withRouter(Routing);