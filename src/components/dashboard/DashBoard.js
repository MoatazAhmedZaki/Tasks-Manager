import React, { Component } from "react";
import { Notification } from "./Notification";
import { ProjectList } from "../projects/ProjectList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class DashBoard extends Component {
  render() {
    // console.log(this.props)
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/SignIn" />;

    return (
      <div className="container dashboard py-5">
        <div className="row rev">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <ProjectList projects={projects} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="container ">
              <Notification notifications={notifications} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(DashBoard);
