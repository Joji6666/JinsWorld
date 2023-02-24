import React, { useCallback, useEffect, useRef, useState } from "react";
import char from "../../images/hero.gif";
import charRun from "../../images/herorun.gif";
import charLeft from "../../images/heroleft.gif";
import charRunLeft from "../../images/herorunleft.gif";
import "./char.css";
import { useDispatch, useSelector } from "react-redux";
import { setMove } from "../../store";

export default function Char() {
  const { move } = useSelector((state) => state.move);
  const charRef = useRef();
  const intervalRef = useRef(null);
  const dispatch = useDispatch();

  const [charImg, setCharImg] = useState(char);

  const handleArrowPress = (event) => {
    if (event.keyCode === 37) {
      // 왼쪽 화살표를 눌렀을 때 실행될 코드
      event.preventDefault();

      dispatch(setMove(move - 40));

      setCharImg(charRunLeft);
      console.log(move);
      document.removeEventListener("keydown", handleArrowPress);
    } else if (event.keyCode === 39) {
      // 오른쪽 화살표를 눌렀을 때 실행될 코드
      event.preventDefault();

      dispatch(setMove(move + 40));
      setCharImg(charRun);
      console.log(move);

      document.removeEventListener("keydown", handleArrowPress);
    } else if (event.keyCode === 38) {
      if (move >= 800 && move <= 840) {
        event.preventDefault();
        dispatch(setMove(7300));

        console.log("프로젝트 이동");

        // 이벤트 핸들러 등록 해제
        document.removeEventListener("keydown", handleArrowPress);
      }
    }

    if (event.keyCode === 38) {
      if (move >= 5980 && move <= 6030) {
        event.preventDefault();
        dispatch(setMove(7300));

        console.log("프로젝트 이동");
        document.removeEventListener("keydown", handleArrowPress);
      }
    }

    if (event.keyCode === 38) {
      if (move >= 1000 && move <= 1040) {
        event.preventDefault();
        dispatch(setMove(10500));

        console.log("연락 이동");
        document.removeEventListener("keydown", handleArrowPress);
      }
    }
    if (event.keyCode === 38) {
      if (move >= 8980 && move <= 9030) {
        event.preventDefault();
        dispatch(setMove(10500));

        console.log("연락 이동");
        document.removeEventListener("keydown", handleArrowPress);
      }
    }

    if (event.keyCode === 38) {
      if (move >= 600 && move <= 640) {
        event.preventDefault();
        dispatch(setMove(4700));

        console.log("스킬 이동");
        document.removeEventListener("keydown", handleArrowPress);
      }
    }
    if (event.keyCode === 38) {
      if (move >= 3200 && move <= 3240) {
        event.preventDefault();
        dispatch(setMove(4700));

        console.log("스킬 이동");
        document.removeEventListener("keydown", handleArrowPress);
      }
    }

    if (event.keyCode === 38) {
      if (move >= 1240 && move <= 1280) {
        event.preventDefault();
        window.open("https://github.com/Joji6666", "_blank");
      }
    }

    if (event.keyCode === 38) {
      if (move >= 400 && move <= 460) {
        event.preventDefault();
        dispatch(setMove(2200));

        console.log("자기소개 이동");
        document.removeEventListener("keydown", handleArrowPress);
      }
    }
    if (event.keyCode === 90) {
      event.preventDefault();
      window.scrollTo({ left: 0, behavior: "smooth" });
      dispatch(setMove(0));

      console.log("시작 지역 이동");
      document.removeEventListener("keydown", handleArrowPress);
    }

    if (move > 13860) {
      dispatch(setMove(0));
      window.scrollTo({ left: 0, behavior: "smooth" });
      document.removeEventListener("keydown", handleArrowPress);
    }
    if (move < -200) {
      dispatch(setMove(0));
      window.scrollTo({ left: 0, behavior: "smooth" });
      document.removeEventListener("keydown", handleArrowPress);
    }
  };

  const keyUphandleArrowPress = () => {
    if (charImg === charRunLeft) {
      setCharImg(charLeft);
    } else if (charImg === charRun) {
      setCharImg(char);
    }
  };

  document.addEventListener("keydown", handleArrowPress);
  document.addEventListener("keyup", keyUphandleArrowPress);

  useEffect(() => {
    window.scrollTo({ left: move - 800, behavior: "smooth" });
  }, [move]);

  return (
    <>
      <div ref={charRef} className="char" style={{ left: `${move}px` }}>
        <img id="char" src={charImg} />
      </div>
      <div className="mobile-btn">
        <div className="btn-box">
          <span
            onClick={() => {
              if (move >= 800 && move <= 840) {
                dispatch(setMove(7300));
                window.scrollTo({ left: 6500, behavior: "smooth" });
                console.log("프로젝트 이동");
              }
              if (move >= 1000 && move <= 1040) {
                dispatch(setMove(10500));
                window.scrollTo({ left: 9500, behavior: "smooth" });
                console.log("연락 이동");
              }
              if (move >= 600 && move <= 640) {
                dispatch(setMove(4700));
                window.scrollTo({ left: 4500, behavior: "smooth" });
                console.log("스킬 이동");
              }
              if (move >= 400 && move <= 460) {
                dispatch(setMove(2200));
                window.scrollTo({ left: 1600, behavior: "smooth" });
                console.log("자기소개 이동");
              }
            }}
            className="up-arrow"
          >
            &#8593;
          </span>
          <span className="left-arrow">&#8592;</span>
          <span
            onClick={() => {
              dispatch(setMove(move + 40));
              setCharImg(charRun);

              window.scrollTo({ left: move - 100, behavior: "smooth" });
            }}
            className="right-arrow"
          >
            &#8594;
          </span>
          <span
            onClick={() => {
              window.scrollTo({ left: 0, behavior: "smooth" });
              dispatch(setMove(0));

              console.log("자기소개 이동");
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            돌아가기
          </span>
        </div>
      </div>
    </>
  );
}
