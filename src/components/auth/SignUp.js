import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",

    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container signup py-5">
        <h3 className="white-text pb-3">Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="white-text">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
            <small id="emailHelp" class="form-text white-text">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="password"  className="white-text">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName"  className="white-text">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName"  className="white-text">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>

          {authError ? (
            <div className="alert alert-danger" role="alert">
              {authError.message}
            </div>
          ) : null}

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
