import gsap from "gsap";
import React, { useRef } from "react";
import "./Block.css";
import imageOne from "./Images/documentation.png";
import imageTwo from "./Images/expresspos.png";
import imageThree from "./Images/connectexe.png";

export const Block = React.forwardRef((props, ref) => {
  const hoverElementRef = useRef(null);

  const hoverBlock = (element) => {
    hoverElementRef.current = element.currentTarget;
    const hoverTimeline = gsap.timeline();
    hoverTimeline.to(hoverElementRef.current, {
      y: -5,
      cursor: "pointer",
      boxShadow: "0px 24px 18px rgba(0,0,0,0.2)",
      filter: "saturate(1.2)",
    });
    gsap.to(hoverElementRef.current.children[0], {
      y: -5,
    });
    gsap.to(hoverElementRef.current.children[1].children[0], {
      y: 15,
    });
  };

  const unHoverBlock = (element) => {
    const hoverTimeline = gsap.timeline();
    hoverTimeline.to(hoverElementRef.current, {
      y: 0,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      filter: "saturate(1)",
    });
    gsap.to(hoverElementRef.current.children[0], {
      y: 0,
    });
    gsap.to(hoverElementRef.current.children[1].children[0], {
      y: 0,
    });
    hoverElementRef.current = null;
  };

  return (
    <div className="block-container" ref={ref}>
      <div
        className="block b-1"
        onMouseEnter={hoverBlock}
        onMouseLeave={unHoverBlock}
        onClick={() => {
          window.open("https://react-essentials.netlify.app/", "_blank");
        }}
      >
        <span className="med-text bold rt bt">REACT-ESSENTIALS</span>
        <div className="block-content">
          <img
            src={imageOne}
            alt="react-essential"
            className="block-img-1"
            disabled
          />
        </div>
      </div>
      <div
        className="block b-2"
        onMouseEnter={hoverBlock}
        onMouseLeave={unHoverBlock}
        onClick={() => {
          window.open("https://expresspos.onrender.com/login", "_blank");
        }}
      >
        <span className="med-text bold rt bt">EXPRESS POS</span>
        <div className="block-content">
          <img src={imageTwo} alt="react-essential" className="block-img-2" />
        </div>
      </div>
      <div
        className="block b-3"
        onMouseEnter={hoverBlock}
        onMouseLeave={unHoverBlock}
        onClick={() => {
          window.open("https://teamtalk.onrender.com", "_blank");
        }}
      >
        <span className="med-text bold rt bt">CONNECT.EXE</span>
        <div className="block-content">
          <img src={imageThree} alt="react-essential" className="block-img-3" />
        </div>
      </div>
    </div>
  );
});
