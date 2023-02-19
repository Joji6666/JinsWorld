import React, { useEffect, useRef } from "react";
import "./background.css";

import Char from "../char/Char";
import Npc from "../npc/Npc";
import Projects from "../projects/Projects";
import Portal from "./portal/Portal";
import Aboutme from "../aboutMe/Aboutme";
import Skill from "../skill/Skill";
import Contect from "../contact/Contact";
import Thankyou from "../thankyou/Thankyou";
import guidebook from "../../images/guidebook.png";
import x from "../../images/x.png";
import guidefont from "../../images/text.gif";

export default function Background() {
  const tutorialRef = useRef();

  return (
    <>
      <div className="background">
        <div className="guidebook">
          <img id="guide-text" src={guidefont} />
          <img
            onClick={() => {
              tutorialRef.current.style.scale = "1";
            }}
            src={guidebook}
          />
        </div>
        <div ref={tutorialRef} className="tutorial">
          <img
            onClick={() => {
              tutorialRef.current.style.scale = "0";
            }}
            src={x}
          />
          <div className="tutorial-text">
            <span>Jins World의 오신걸 환영합니다.</span>
            <span>키보드의 좌우 방향키를 입력하여 이동할 수 있습니다.</span>
            <span>
              포탈에서는 키보드 상측 방향키를 입력하면 해당 구간으로 이동할 수
              있습니다.
            </span>
            <span>
              화면에 보이는 아이콘들을 클릭하시면 해당 링크페이지가 새로운 창에
              생성됩니다.
            </span>
            <span>Z키를 입력하시면 처음 구간으로 이동할 수 있습니다.</span>
          </div>
        </div>
        <div>
          <h1 id="jins-world-head">Jins World</h1>
        </div>
        <Char />

        <Portal />
        <Npc />
        <Projects />
        <Aboutme />
        <Skill />
        <Contect />
        <Thankyou />
      </div>
    </>
  );
}
