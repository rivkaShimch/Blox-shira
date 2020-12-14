import React from 'react';
import {
  BrowserRouter as Router, Route,
  Switch,
  Link
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Wrap from './components/Wrap/wrap';
// import Login from './components/Login/login';
// import SignUp from './components/Signup/signup';
import Login from './components/Login/login';
import { connect } from 'react-redux';

library.add(fab, fas)
const App = function (props) {
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/:username">
            <Wrap />
            {/* {
              props.loginStatus === 'success' ? <Wrap /> :
                <Login />
            } */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};


function mapStateToProps(state) {
  return {
    displayComponents: state.displayComponents.displayComponents,
    loginStatus: state.loginStatus.loginStatus,
    canvasDetails: state.canvasDetails.canvasDetails,
  };
}
export default connect(mapStateToProps)(App)
