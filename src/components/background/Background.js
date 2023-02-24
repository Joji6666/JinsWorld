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
import leftArrow from "../../images/leftarrow.png";
import rightArrow from "../../images/rightarrow.png";
import upArrow from "../../images/uparrow.png";
import zkey from "../../images/zkey2.png";

export default function Background() {
  const tutorialRef = useRef();

  useEffect(() => {
    tutorialRef.current.style.scale = "1";
  }, []);

  return (
    <>
      <div className="background">
        <div
          onClick={() => {
            tutorialRef.current.style.scale = "1";
          }}
          className="guidebook"
        >
          <img id="guide-text" src={guidefont} />
          <img src={guidebook} />
        </div>
        <div ref={tutorialRef} className="tutorial">
          <img
            onClick={() => {
              tutorialRef.current.style.scale = "0";
            }}
            src={x}
          />
          <div className="tutorial-text">
            <img id="tutorial-rightarrow" src={rightArrow} />
            <img id="tutorial-leftarrow" src={leftArrow} />
            <img id="tutorial-uparrow" src={upArrow} />
            <img id="zkey" src={zkey} />

            <span style={{ fontSize: "24px", marginBottom: "20px" }}>
              Jins World의 오신걸 환영합니다.
            </span>
            <span>이동 방법:</span>
            <span>포탈 이용 방법:</span>
            <span>시작 지역으로 이동하기:</span>
            <span style={{ fontSize: "13px", marginTop: "120px" }}>
              포탈에서는 키보드 상측 방향키를 입력하면 해당 영역으로 이동할 수
              있습니다.
            </span>
            <span style={{ fontSize: "13px" }}>
              화면에 보이는 아이콘들을 클릭하시면 해당 링크페이지가 새로운 창에
              생성됩니다.
            </span>
            <span style={{ fontSize: "13px" }}>
              전체 화면 플레이를 권장합니다.
            </span>
            <span style={{ fontSize: "13px" }}>
              모바일 버전은 준비중입니다.
            </span>
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
