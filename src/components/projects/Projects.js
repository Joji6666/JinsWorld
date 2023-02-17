import React from "react";
import { projects } from "./Project";
import "./projects.css";
import github from "../../images/icons/github.png";
import youtube from "../../images/icons/youtube.png";
import demo from "../../images/icons/demo.png";
import notion from "../../images/icons/notion-icon.png";

export default function Projects() {
  return (
    <>
      <div className="project-container">
        {projects.map((data) => {
          return (
            <div className="project-cards">
              <div className="thumbnail">
                <img
                  onClick={() => {
                    window.open(`${data.notion}`, "_blank");
                  }}
                  src={data.thumbnail}
                />
              </div>
              <div className="title">
                <span>{data.title}</span>
              </div>
              <div className="description">
                <span>{data.description}</span>
              </div>
              <div className="link-box">
                <div className="github">
                  <img
                    src={github}
                    onClick={() => {
                      window.open(`${data.github}`, "_blank");
                    }}
                  />
                </div>
                <div className="youtube">
                  <img
                    src={youtube}
                    onClick={() => {
                      window.open(`${data.youtube}`, "_blank");
                    }}
                  />
                </div>
                <div className="notion">
                  <img
                    src={notion}
                    onClick={() => {
                      window.open(`${data.notion}`, "_blank");
                    }}
                  />
                </div>
                <div className="demolink">
                  <img
                    src={demo}
                    onClick={() => {
                      window.open(`${data.demolink}`, "_blank");
                    }}
                  />
                </div>
              </div>
              <div className="tags">
                {data.tags.map((tags) => {
                  return <span id="tag">{tags}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
