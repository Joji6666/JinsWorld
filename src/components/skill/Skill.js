import React, { useRef } from "react";
import js from "../../images/skills/js.png";
import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import react from "../../images/skills/react.png";
import redux from "../../images/skills/redux.png";
import jquery from "../../images/skills/jquery.png";
import typescript from "../../images/skills/typescript.png";
import bootstrap from "../../images/skills/bootstrap.png";
import firebase from "../../images/skills/firebase.png";
import git from "../../images/skills/git.png";
import github from "../../images/skills/github.png";

import "./skill.css";
import { useSelector } from "react-redux";

export default function Skill() {
  const { move } = useSelector((state) => state.move);
  const skillRef = useRef();

  if (move >= 4700 && move <= 6460) {
    setTimeout(() => {
      skillRef.current.style.scale = "1";
    }, 500);
  } else if (move >= 6780) {
    skillRef.current.style.scale = "0";
  }

  return (
    <>
      <h1>Skills</h1>
      <div ref={skillRef} className="skills-container">
        <div className="icon-box">
          <span id="front-end">Front-End</span>
          <div className="frontend-box">
            <div className="icon-border">
              <img id="js" src={js} />
            </div>
            <div className="icon-border">
              <img id="html" src={html} />
            </div>
            <div className="icon-border">
              <img id="css" src={css} />
            </div>
            <div className="icon-border">
              <img id="react" src={react} />
            </div>
            <div className="icon-border">
              <img id="redux" src={redux} />
            </div>
            <div className="icon-border">
              <img id="jquery" src={jquery} />
            </div>
            <div className="icon-border">
              <img id="typescript" src={typescript} />
            </div>
            <div className="icon-border">
              <img id="bootstrap" src={bootstrap} />
            </div>
          </div>
          <span id="back-end">Back-End</span>
          <div className="backend-box">
            <div className="icon-border">
              <img id="firebase" src={firebase} />
            </div>
          </div>
          <span id="version-control">Version-Control</span>
          <div className="versioncontrol-box">
            <div className="icon-border">
              <img id="git" src={git} />
            </div>
            <div className="icon-border">
              <img id="github" src={github} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
