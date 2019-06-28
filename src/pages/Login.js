import React, { Component } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="login">
        <p>Zaloguj się, aby wejść do gry </p>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>Login:</label>
            <input
              type="text"
              value={this.props.username}
              name="username"
              onChange={this.props.handleChange}
            />
          </div>

          <div>
            <label>Hasło: </label>
            <input
              type="text"
              value={this.props.password}
              name="password"
              onChange={this.props.handleChange}
            />
          </div>
          <button>Zaloguj</button>
        </form>
        <span>
          Nie masz konta? <Link to="/register">Zarejestruj się</Link>
        </span>
      </div>
    );
  }
}

export default Login;
