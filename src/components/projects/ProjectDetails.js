import React from "react";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import moment from "moment";

const ProjectDetails = (props) => {
  // console.log("props");
  // console.log(props);

  const { project, auth } = props;

  if (!auth.uid) return <Redirect to="/SignIn" />;

  if (project) {
    return (
      <div className="container section project-details my-5">
        <div className="card  ">
          <div className="card-content p-3">
            <h3 className="card-title">
              <span className="blue-text"> Task Title : </span> {project.title}
            </h3>
            <h5>
              <span className="blue-text"> Task Description : </span>
              {project.content}
            </h5>

            <div className=" p-0">
              <span className="blue-text">Posted by : </span>
              {project.authorFirstName} {project.authorLastName}
            </div>
            <div className=" pb-2">
              {moment(project.createdAt.toDate()).calendar()}
            </div>

            <Link to="/" className="black-text ">
              ⬅️ Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="white-text text-center py-5">Project is loading</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return { project: project, auth: state.firebase.auth };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
