import React, { useEffect } from "react";
import "./background.css";

import Char from "../char/Char";
import Npc from "../npc/Npc";
import Projects from "../projects/Projects";
import Portal from "./portal/Portal";
import Aboutme from "../aboutMe/Aboutme";

export default function Background() {
  return (
    <>
      <div className="background">
        <span id="welcome">Welcome!</span>
        <span id="jinsWorld">Jins World</span>
        <Char />

        <div className="move-tutorial">
          <div id="how-move">이동 방법</div>
          <span id="left-arrow">&larr;</span>
          <span id="right-arrow">&rarr;</span>
        </div>
        <Portal />
        <Npc />
        <Projects />
        <Aboutme />
      </div>
    </>
  );
}
