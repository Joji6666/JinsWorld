import React from "react";
import wizzard from "../../images/wizzard.gif";
import cat from "../../images/cat.gif";
import my from "../../images/my.gif";
import "./npc.css";
import github from "../../images/githubcat.png";

export default function Npc() {
  return (
    <>
      <div>
        <img id="wizzard" src={wizzard} />
      </div>
      <div className="cat-npc">
        <span
          onClick={() => {
            window.open("https://github.com/Joji6666", "_blank");
          }}
          id="githubspan"
        >
          GitHub
        </span>
        <img
          onClick={() => {
            window.open("https://github.com/Joji6666", "_blank");
          }}
          id="cat-github"
          src={github}
        />
        <img id="cat" src={cat} />
      </div>
      <div>
        <img id="my" src={my} />
      </div>
    </>
  );
}
