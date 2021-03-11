import React from "react";
import { ProjectSummary } from "./ProjectSummary";

import { Link } from "react-router-dom";

export const ProjectList = ({ projects }) => {
  // console.log("projectlist")
  // console.log(projects)

  return (
    <div className="project-list section ">
      <h1 className="mt-3">List Of All Tasks</h1>

      {projects &&
        projects.map((project) => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};
