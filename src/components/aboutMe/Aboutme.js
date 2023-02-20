import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./aboutme.css";

export default function Aboutme() {
  const { move } = useSelector((state) => state.move);
  const aboutRef = useRef();

  if (move >= 2000 && move <= 3700) {
    setTimeout(() => {
      aboutRef.current.style.scale = "1";
    }, 500);
  } else if (move >= 3960) {
    aboutRef.current.style.scale = "0";
  }
  return (
    <>
      <h1 id="about-head">Introduce</h1>
      <div ref={aboutRef} className="aboutMe-container">
        <div className="aboutMe-text">
          <p>안녕하세요.</p>
          <p>프론트엔드 개발자 김진입니다.</p>
          <p>
            새로운 도전을 좋아하며 제게 나타난 문제를 해결할 때 크나큰 성취감을
            느낍니다.
          </p>
          <p>
            배움에는 끝이 없다고 생각하며 제가 만나는 모든 사람, 제가 경험한
            모든 것이 저의 스승이라 생각하며 항상 배움에 감사하고 있습니다.
          </p>
          <p>
            코딩 기술만큼 커뮤니케이션 능력 또한 중요하다고 생각하며 소통하는
            개발자가 되고 싶습니다.
          </p>
        </div>
      </div>
    </>
  );
}
