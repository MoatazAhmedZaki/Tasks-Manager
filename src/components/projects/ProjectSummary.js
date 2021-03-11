import React from "react";
import moment from "moment";

export const ProjectSummary = ({ project }) => {
  // console.log(project.createdAt)
  return (
    <div className="card project-summary my-3">
      <div className="blacklayout text-right">
        <p className="white-text pl-5 pr-2 pt-2">View More</p>
      </div>
      <div className="card-body">
        <div className="card-title black-text ">
          <span className="blue-text"> Task Title : </span>
          {project.title}
        </div>
        <p className=" black-text ">
          <span className="blue-text">Task Description :</span>
          {project.content}
        </p>
        <div className=" black-text text-right ">
          <span className="blue-text"> Posted By : </span>
          {project.authorFirstName} {project.authorLastName}
        </div>

        <div className=" black-text text-right ">
          {moment(project.createdAt.toDate()).calendar()}
        </div>
      </div>
    </div>
  );
};
