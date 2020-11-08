import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Wrap from './components/Wrap/wrap';

library.add(fab, fas)

const App = function () {
  return (
    <Router>
      <div className="container-fluid">
        <Route path="/" component={Wrap} />
      </div>

    </Router>
  );
};
export default App
