import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../constants/api-key";
import TopRatedBtn from "../BUTTONS/top-rated-btn";
import UpcomingBtn from "../BUTTONS/upcoming-btn";
import CurrentBtn from "../BUTTONS/current-btn";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  
  // top-rated

  // componentDidMount() {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`
  //   )
  //     .then(response => response.json())
  //     .then(result => console.log(result.results))
  //     // this.setState({ result }))
  //     .catch(error => this.setState({ error: `City doesn't exist!` }));
  // }

  render() {
    return (
      <div>
        <CurrentBtn value={this.props.name} clicked={this.currentClick} />
        <TopRatedBtn value={this.props.name} clicked={this.topRatedClick} />
        <UpcomingBtn value={this.props.name} clicked={this.upcomingClick} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentClick: () => dispatch({ type: "CURRENT" }),
    topRatedClick: () => dispatch({ type: "TOP_RATED" }),
    upcomingClick: () => dispatch({ type: "UPCOMING" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
