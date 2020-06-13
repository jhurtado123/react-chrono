import React, {Component} from 'react';
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {

  render() {
    const {isLogged, children, ...rest} = this.props;
    return (
      <Route {...rest}>
        {isLogged ?
          (children) :
          <Redirect
            to={{
              pathname: "/login",
              state: { from: this.props.location },
            }}
        />}
      </Route>
    );
  }
}

export default PrivateRoute;