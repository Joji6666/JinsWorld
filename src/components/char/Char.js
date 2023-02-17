import React, { useEffect, useRef, useState } from "react";
import char from "../../images/hero.gif";
import charRun from "../../images/herorun.gif";
import charLeft from "../../images/heroleft.gif";
import charRunLeft from "../../images/herorunleft.gif";
import "./char.css";

export default function Char() {
  const charRef = useRef();
  const [move, setMove] = useState(0);
  const [charImg, setCharImg] = useState(char);

  const handleArrowPress = (event) => {
    if (event.keyCode === 37) {
      // 왼쪽 화살표를 눌렀을 때 실행될 코드
      event.preventDefault();

      setMove(move - 40);
      window.scrollTo({ left: move - 1000, behavior: "smooth" });
      setCharImg(charRunLeft);

      // getBoundingClientRect는  DOM 요소의 크기와 상대적인 위치에 대한 정보를 제공하는 메서드다.
      const charRect = charRef.current.getBoundingClientRect().left;
      console.log(charRect);
      document.removeEventListener("keydown", handleArrowPress);
    } else if (event.keyCode === 39) {
      // 오른쪽 화살표를 눌렀을 때 실행될 코드
      event.preventDefault();

      setMove(move + 40);
      setCharImg(charRun);

      window.scrollTo({ left: move - 1000, behavior: "smooth" });
      const charRect = charRef.current.getBoundingClientRect().left;
      console.log(charRect);
      document.removeEventListener("keydown", handleArrowPress);
    } else if (event.keyCode === 38) {
      const charCoordinate = charRef.current.getBoundingClientRect().left;
      if (charCoordinate >= 920 && charCoordinate <= 1070) {
        event.preventDefault();
        setMove(5200);
        window.scrollTo({ left: 4200, behavior: "smooth" });
      }
    }
  };

  document.addEventListener("keydown", handleArrowPress);

  return (
    <div className="char" style={{ left: `${move}px` }}>
      <img ref={charRef} id="char" src={charImg} />
    </div>
  );
}
