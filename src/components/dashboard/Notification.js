import React from "react";
import moment from "moment";

export const Notification = (props) => {
  const { notifications } = props;
  return (
    <div className="section ">
      <div className="card ">
        <div className="card-content py-2  ">
          <p className="text-center card-content-title ">Notifications</p>
          <ul className="Notifications">
            {notifications &&
              notifications.map((item) => {
                return (
                  <li key={item.id}>
                    <span className="blue-text"> {item.user}</span>
                    <span className="black-text"> {item.content}</span>
                    <br />
                    <span className="gray-text">
                      {moment(item.time.toDate()).fromNow()}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};
