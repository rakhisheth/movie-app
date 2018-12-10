import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import api from "./constants/API/api-key";
import Home from "./components/PAGES/home";
import TopRated from "./components/PAGES/top-rated";
import Upcoming from "./components/PAGES/upcoming";
import Navigation from "./components/NAVIGATION/navigation";

class App extends Component {
  constructor() {
    super();

    this.state = {
      clicked: true
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${api}`);
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/top-rated" component={TopRated} />
              <Route path="/upcoming" component={Upcoming} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
