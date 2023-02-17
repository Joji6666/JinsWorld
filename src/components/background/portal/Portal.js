import React from "react";
import portal from "../../../images/portal/Portal004.gif";
import "./portal.css";

export default function Portal() {
  return (
    <>
      <div className="project-portal">
        <span>프로젝트 바로가기</span>
        <img
          style={{
            width: "120px",
          }}
          src={portal}
        />
      </div>
    </>
  );
}
