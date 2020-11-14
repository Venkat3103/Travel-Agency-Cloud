import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Home from "./components/Homepage";
import Kerala from "./components/Kerala";

export const HomeRoute = "/";
export const KeralaRoute = "/Kerala/";

class Routing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path={HomeRoute} exact component={Home} />
        <Route path={KeralaRoute} component={Kerala} />
      </React.Fragment>
    );
  }
}
export default withRouter(Routing);