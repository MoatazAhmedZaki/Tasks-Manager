import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-NavLink" to="/CreateProject">
            New Task
          </NavLink>
          <NavLink className="nav-NavLink" to="/" onClick={props.signOut}>
            Log Out
          </NavLink>

          <NavLink className="nav-NavLink btn navbar-circle" to="/">
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDsipatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDsipatchToProps)(SignedInLinks);
