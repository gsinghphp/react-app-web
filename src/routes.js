import React from "react";
import { Route } from "react-router-dom";
//import * as firebase from "firebase/app";
import Login from "./containers/Login";
import SignUp from "./containers/Signup";
//import Dashboard from "./containers/Dashboard";
const Dashboard = React.lazy(() => import('./containers/Dashboard'));

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         firebase.auth().currentUser
//         ? <Component {...props} />
//         : <Redirect to='/' />
//     )} />
//   )

  function WaitingComponent(Component) {
    return props => (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  }

const Routes = () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/dashboard" component={WaitingComponent(Dashboard)} />
  </div>
);


export default Routes;
