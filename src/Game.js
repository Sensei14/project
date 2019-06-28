import React, { Component } from "react";
import Navbar from "./layouts/Navbar";
import Content from "./layouts/Content.js";
import Footer from "./layouts/Footer";
import store from "./config/store";
import { connect } from "react-redux";

class Game extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    fetch("http://localhost:3001/items")
      .then(res => res.json())
      .then(res => {
        store.dispatch({
          type: "LOADED",
          items: res
        });
      })
      .then(() =>
        this.setState({
          isLoaded: true
        })
      );
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Content>
          {" "}
          {this.state.isLoaded ? "Ładowanie zawartości gry" : null}{" "}
        </Content>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.items };
};

export default connect(mapStateToProps)(Game);
