import React, { Component } from "react";
import {connect} from "react-redux"
import {createProject} from "../../store/actions/projectActions"
import { Redirect ,Link} from "react-router-dom";

 class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // console.log(this.state);
    this.props.createProject(this.state)
    this.props.history.push("/")
  };

  render() {

    const { auth} = this.props;
    if(!auth.uid ) return <Redirect to="/SignIn" />


    return (
      <div className="container py-5">
        <h3 className="white-text pb-3">Create Task</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title " className="white-text">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label  htmlFor="content" className="white-text">Description</label>
            <textarea
              className="form-control"
              id="content"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            ADD
          </button>

          <Link to="/" className="white-text px-5 ">
              ⬅️ Go Back
            </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
   auth: state.firebase.auth };
};

const mapDispatchtoProps = (dispatch)=>{


return { createProject : ( project) => dispatch(createProject(project))}


}


export default connect(mapStateToProps,mapDispatchtoProps)(CreateProject)