import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./component/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Pigeon from "./pages/pigeon/Pigeon";
import SignIn from "./pages/SignIn";
import AddPigeon from "./pages/pigeon/AddPigeon";
import ViewPigeon from "./pages/pigeon/ViewPigeon";
import EditPigeon from "./pages/pigeon/EditPigeon";
import { Get } from "./lib";
import { logout } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = () => {
    Get("user/auth").then((res) => {
      if (res.message === "UNAUTHORIZED") {
        this.props.logout();
      }
    });
  };
  render() {
    const { isLoggedIn } = this.props;

    return (
      <Router>
        <Switch>
          <PrivateRoute
            path="/"
            authenticated={isLoggedIn}
            exact
            component={Dashboard}
          />
          <PrivateRoute
            exact
            path="/merpati"
            authenticated={isLoggedIn}
            component={Pigeon}
          />
          <PrivateRoute
            path="/merpati/add"
            authenticated={isLoggedIn}
            component={AddPigeon}
          />
          <Route
            path="/merpati/trah/:id"
            authenticated={isLoggedIn}
            component={ViewPigeon}
          />
          <PrivateRoute
            path="/merpati/edit/:id"
            authenticated={isLoggedIn}
            component={EditPigeon}
          />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
