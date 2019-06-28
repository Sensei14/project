import React, { Component } from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

class RegisterPage extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    name: "",
    showMessage: false
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  register = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name
    };

    fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 1) {
          this.setState({
            showMessage: true
          });
        }
      });
  };

  render() {
    const message = (
      <div className="alert" role="alert">
        <strong>Użytkownik pomyślnie zarejestrowany!</strong> Możesz się teraz
        zalogować
        <br />
        <Link to="/"> Wróć do logowania</Link>
      </div>
    );

    return (
      <div className="register">
        <p>Wypełnij wszystkie pola</p>

        <form onSubmit={this.register}>
          <div className="form-div">
            <label>Nazwa użytkownika </label>
            <input
              type="text"
              onChange={this.handleChange}
              name="username"
              value={this.state.username}
            />
          </div>
          <div className="form-div">
            <label>Hasło</label>
            <input
              type="password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
            />
          </div>
          <div className="form-div">
            <label>E-mail</label>
            <input
              type="email"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="form-div">
            <label>Nazwa postaci</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
            />
          </div>
          <button>Zarejestruj</button>
        </form>
        {/* {this.state.showMessage ? { message } : null} */}
        {message}
      </div>
    );
  }
}

export default RegisterPage;
