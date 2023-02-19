import React from "react";
import portal from "../../../images/portal/Portal004.gif";
import "./portal.css";

export default function Portal() {
  return (
    <>
      <div className="portal-container">
        <div className="project-portal">
          <span>About Me</span>
          <img
            style={{
              width: "120px",
            }}
            src={portal}
          />
        </div>
        <div className="aboutMe-portal">
          <span>Skills</span>
          <img
            style={{
              width: "120px",
            }}
            src={portal}
          />
        </div>
        <div className="skill-portal">
          <span>Projects</span>
          <img
            style={{
              width: "120px",
            }}
            src={portal}
          />
        </div>
        <div className="contact-portal">
          <span>Contact</span>
          <img
            style={{
              width: "120px",
            }}
            src={portal}
          />
        </div>
      </div>
    </>
  );
}
