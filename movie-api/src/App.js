import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/PAGES/home";
import TopRated from "./components/PAGES/top-rated";
import CurrentMovies from "./components/PAGES/current-movies";
import Upcoming from "./components/PAGES/upcoming";
import Navigation from "./components/NAVIGATION/navigation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/current" component={CurrentMovies} />
            <Route path="/top-rated" component={TopRated} />
            <Route path="/upcoming" component={Upcoming} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
