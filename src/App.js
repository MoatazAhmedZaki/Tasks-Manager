import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import DashBoard from "./components/dashboard/DashBoard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/Project/:id" component={ProjectDetails} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/CreateProject" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
