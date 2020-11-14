import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routing from './Routing.js'

import './App.css';
import Homepage from './components/Homepage';

const history = createBrowserHistory();;

function App() {
  
  return (
    <div>
         <Router history={history}><Routing /></Router>
    </div>
  );
}

export default App;
