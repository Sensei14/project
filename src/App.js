import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import Game from "./Game";
import store from "./config/store";
import Login from "./pages/Login";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import RegisterPage from "./pages/RegisterPage";

class App extends Component {
  state = { username: "", password: "" };
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status) {
          store.dispatch({
            type: "LOGIN",
            user: res.user,
            isLogged: { isLogged: true }
          });
        }
      });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          {this.props.isLogged ? (
            <Game />
          ) : (
            <Login
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              username={this.state.username}
              password={this.state.password}
            />
          )}
          {/* <Game /> */}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.user,
    ...state.isLogged
  };
};

export default connect(mapStateToProps)(App);
