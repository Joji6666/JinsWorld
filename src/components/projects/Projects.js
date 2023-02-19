import React, { useRef } from "react";
import { projects } from "./Project";
import "./projects.css";
import github from "../../images/icons/github.png";
import youtube from "../../images/icons/youtube.png";
import demo from "../../images/icons/demo.png";
import notion from "../../images/icons/notion-icon.png";
import { useSelector } from "react-redux";

export default function Projects() {
  const { move } = useSelector((state) => state.move);
  const projectRef = useRef();

  if (move >= 7100 && move <= 9780) {
    setTimeout(() => {
      projectRef.current.style.top = "80px";
    }, 500);
  } else if (move >= 10000) {
    projectRef.current.style.top = "-400px";
  }

  return (
    <>
      <h1 id="project-head">Projects</h1>
      <div ref={projectRef} className="project-container">
        {projects.map((data) => {
          return (
            <div className="card-background">
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
            </div>
          );
        })}
      </div>
    </>
  );
}
