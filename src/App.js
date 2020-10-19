import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


//add to rivka

// import NavBar from "./components/navbar";
// import CreateUser from "./components/create-user";
// import About from "./components/about";
// import Home from "./components/Home/home";
// import Login from './components/Login/login';
// import Empty_page from './components/Empty_page/empty_page';
import Wrap from './components/Wrap/wrap';

library.add(fab, fas)

const App = function () {
  return (
    <Router>
      <div className="container-fluid">
        {/* <NavBar />
        <br />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/user" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/empty_page" component={Empty_page} /> */}
        <Route path="/" component={Wrap} />

      </div>

    </Router>
  );
};
export default App
