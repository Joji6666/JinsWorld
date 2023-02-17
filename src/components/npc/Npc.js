import React from "react";
import npc1 from "../../images/npc1.png";
import cat from "../../images/cat.gif";
import my from "../../images/my.gif";
import "./npc.css";

export default function Npc() {
  return (
    <>
      <div className="npc1">
        <img id="npc1" src={npc1} />
      </div>
      <div>
        <img id="cat" src={cat} />
      </div>
      <div>
        <img id="my" src={my} />
      </div>
    </>
  );
}
