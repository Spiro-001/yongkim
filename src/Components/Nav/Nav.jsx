import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import "./Nav.css";

export const Nav = ({ menuState, setMenuState }) => {
  const navRef = useRef(null);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      gsap.to(navRef.current, {
        backgroundColor: "rgba(71, 57, 168, 1)",
        duration: 0.3,
      });
    } else if (window.pageYOffset === 0) {
      gsap.to(navRef.current, {
        backgroundColor: "rgba(71, 57, 168, 0)",
        duration: 0.3,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useLayoutEffect(() => {
    const selectedMenu = navRef.current.children[menuState];
    gsap.to("#active", {
      height: selectedMenu.clientHeight - 12,
      width: selectedMenu.clientWidth - 52,
      x: selectedMenu.offsetLeft - 16,
      duration: 0.35,
      ease: "power1.out",
    });
  });

  return (
    <div className="nav" ref={navRef}>
      <div className="overlay" id="active"></div>
      <li
        onClick={(e) => {
          setMenuState(1);
          window.scrollTo(0, 0);
        }}
      >
        Work
      </li>
      <li
        onClick={(e) => {
          setMenuState(2);
          window.scrollTo(0, 0);
        }}
      >
        About
      </li>
      <li
        onClick={(e) => {
          setMenuState(3);
          window.scrollTo(0, 0);
        }}
      >
        Development
      </li>
      <li
        onClick={(e) => {
          setMenuState(4);
          window.scrollTo(0, 0);
        }}
      >
        Contact
      </li>
    </div>
  );
};
