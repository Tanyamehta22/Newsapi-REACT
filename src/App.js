import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import{
  BrowserRouter as Router,
  Switch,
  Route,
  
 
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
        
        <Switch>
          <Route exact path="/"><News key="general" pageSize={5} country="in" 
        category="general" /></Route>

        <Route exact path="/business"><News key="business" pageSize={5} country="in" 
        category="Business" /></Route>

        <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" 
        category="Entertainment" /></Route>

        <Route exact path="health/"><News key="health" pageSize={5} country="in" 
        category="Health" /></Route>

<Route exact path="Science/"><News key="science" pageSize={5} country="in" 
        category="Science" /></Route>

<Route exact path="sports/"><News key="sport" pageSize={5} country="in" 
        category="Sports" /></Route>

<Route exact path="technology/"><News key="technology" pageSize={5} country="in" 
        category="Technology" /></Route>
          
        </Switch>
        </Router>
      </div>
    );
  }
}
