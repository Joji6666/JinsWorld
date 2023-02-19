import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./contact.css";

export default function Contect() {
  const { move } = useSelector((state) => state.move);
  const contactRef = useRef();

  if (move >= 10200 && move <= 11500) {
    setTimeout(() => {
      contactRef.current.style.scale = "1";
    }, 500);
  } else if (move >= 11700) {
    contactRef.current.style.scale = "0";
  }

  return (
    <>
      <h1 id="contact-head">Contact</h1>
      <div ref={contactRef} className="contact-container">
        <div className="contact-box">
          <div className="contact-contents">
            <div>Phone:010-6622-9124</div>
            <div>Email:rlawls11000@naver.com</div>
          </div>
        </div>
      </div>
    </>
  );
}
