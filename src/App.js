import "./App.css";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Block } from "./Components/Block/Block";
import { Nav } from "./Components/Nav/Nav";
import { About } from "./Components/About/About";
import { BrowserRouter } from "react-router-dom";
import stars from "./Components/Block/Images/star-2.svg";
import pfp from "./Components/Block/Images/pfp.jpg";
import fox from "./Components/Block/Images/fox.webp";

function App() {
  const mainRef = useRef(null);
  const descriptionRef = useRef(null);
  const blockRef = useRef(null);
  const graphRef = useRef(null);
  const badgeRef = useRef(null);
  const timelineNoteRef = useRef(null);

  const [menuState, setMenuState] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const hoverTimeline = (element) => {
    if (element.currentTarget.className === element.target.className) {
      timelineNoteRef.current = element.currentTarget.children[0];
      gsap.fromTo(timelineNoteRef.current, { opacity: 0 }, { opacity: 1 });
    }
  };

  const unHoverTimeline = () => {
    gsap.fromTo(timelineNoteRef.current, { opacity: 1 }, { opacity: 0 });
    timelineNoteRef.current = null;
  };

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  useLayoutEffect(() => {
    let loadFirst = gsap.timeline();
    switch (menuState) {
      case 1:
        loadFirst.fromTo(
          mainRef.current,
          { opacity: 0, y: -15 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: -15 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.4,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          blockRef.current,
          { opacity: 0, y: -15 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.6,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          ".stars",
          { opacity: 0, scale: 0 },
          {
            scale: 1.1,
            opacity: 1,
            duration: 0.9,
            delay: 1,
            ease: "elastic.out(1, 0.4)",
          }
        );
        break;
      case 2:
        loadFirst.fromTo(
          mainRef.current,
          { opacity: 0, y: -15 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: -15 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.4,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          blockRef.current,
          { opacity: 0, y: -15 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.6,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, y: -15 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.8,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          graphRef.current,
          { opacity: 0, scale: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            delay: 2.5,
            ease: "elastic.out(1, 0.4)",
          }
        );
        break;
      case 3:
        loadFirst.fromTo(
          mainRef.current,
          { opacity: 0, y: -15 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out",
          }
        );
        break;
      case 4:
        loadFirst.fromTo(
          mainRef.current,
          { opacity: 0, y: -15 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out",
          }
        );
        break;
      default:
        break;
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav menuState={menuState} setMenuState={setMenuState} />
        {menuState === 1 && (
          <>
            <span className="big-text bold ct mt" ref={mainRef}>
              <img src={stars} alt="stars" className="stars" id="star-one" />
              Hello! I'm Yong.
              <br />A Software Developer.
              <img src={stars} alt="stars" className="stars" id="star-two" />
            </span>
            <span className="small-text bold ct dt" ref={descriptionRef}>
              "A software developer who enjoys making the craziest idea come to
              life."
            </span>
            <Block ref={blockRef} />
          </>
        )}
        {menuState === 2 && (
          <>
            <div className="about">
              <span className="big-text bold ct mt at" ref={mainRef}>
                I'm Yong.
              </span>
              <div className="row" ref={descriptionRef}>
                <img src={pfp} alt="self" className="pfp" />
                <div className="column">
                  <p className="about-me-text">
                    "I'm a <span id="highlight">Software Developer</span>
                    <br />
                    who excels at design and conceptual development"
                  </p>
                  <div className="small-text wt" ref={blockRef}>
                    Developing software for 2+ years, although still new to the
                    industry I've worked with Computer Vision applications for
                    manufacturing companies, Front-End Development for
                    e-commerce businesses, and as a Tech Analyst for a
                    non-profit organization built to help smaller bussinesses.
                    <br />
                    <br />
                    I'm ready for my next oppurtunity in my career, and during
                    my down time I continue to study to better my development
                    skills.
                  </div>
                </div>
              </div>
              <div className="row" ref={badgeRef}>
                <div className="column container">
                  <div className="badge med-text bold">TECH STACK</div>
                  <div className="row-start">
                    <img
                      src="https://skillicons.dev/icons?i=ts,js,cpp,python,ruby,react,redux,html,css,rails,nodejs,mongodb,aws,scss,postgresql,github,figma,postman,pr,qt,unreal"
                      alt="badges"
                      className="icons"
                    />
                  </div>
                </div>
              </div>
              <div className="row" ref={graphRef}>
                <div className="graph">
                  <div className="content">
                    <div
                      className="timeline a"
                      onMouseEnter={hoverTimeline}
                      onMouseLeave={unHoverTimeline}
                    >
                      Minecraft Mod Development
                      <div className="container mc tl">
                        <span className="small-text">RPGWeapons+</span>
                        <p className="mini-text">
                          Contributed to the creation of a weapons modpack
                          called RPGWeapons+ in 2014. I developed item assets
                          through Adobe Photoshop and helped integrate the items
                          into the game. Using Java I used Minecraft's rendering
                          system to render newly made items into the game.
                        </p>
                      </div>
                    </div>
                    <div
                      className="timeline b"
                      onMouseEnter={hoverTimeline}
                      onMouseLeave={unHoverTimeline}
                    >
                      Unity Game Development
                      <div className="container ug tl">
                        <span className="small-text">Text2Fight</span>
                        <p className="mini-text">
                          A text based RPG game made using the Unity engine.
                          Created over 100+ items, 5 different classes with
                          stats that factored into gameplay, and created my own
                          assets. Unity used C# and this was great class
                          creation practice. I additionally composed my own
                          soundtrack and material assets.
                        </p>
                      </div>
                    </div>
                    <div
                      className="timeline c"
                      onMouseEnter={hoverTimeline}
                      onMouseLeave={unHoverTimeline}
                    >
                      Unreal Engine Game Development
                      <div className="container ue tl">
                        <span className="small-text">Final Fight</span>
                        <p className="mini-text">
                          A 3D multiplayer quick combat fighter that revolved
                          its gameplay around its own custom movement mechanic.
                          The movement mechanic was based on a game known as
                          GunZ the duel and CSGO. This was built using Unreal
                          Engine 4, development consisted of Unreal Engine's
                          Blueprint system and C++. Assets were made through
                          Blender, creating low poly meshes and mobilized
                          through AutoCAD Maya.
                        </p>
                      </div>
                    </div>
                    <div
                      className="timeline d"
                      onMouseEnter={hoverTimeline}
                      onMouseLeave={unHoverTimeline}
                    >
                      Tech Analyst
                      <div className="container ta tl">
                        <span className="small-text">
                          Consult Your Community
                        </span>
                        <p className="mini-text">
                          A non-profit organization whos main purpose is to
                          support small businesses succeed in their industry.
                          I've work with clothing brands, art galleries, music
                          businesses and small tech startups.
                        </p>
                      </div>
                    </div>
                    <div
                      className="timeline e"
                      onMouseEnter={hoverTimeline}
                      onMouseLeave={unHoverTimeline}
                    >
                      Computer Vision Engineer
                      <div className="container cv tl">
                        <span className="small-text">Contracted</span>
                        <p className="mini-text">
                          A metal flask manufacturing company that needed a QA
                          system that would check the flask for any defects.
                          Using Python, OpenCV, and YOLOv8 I created a learning
                          model that would detect and defects with a 98%
                          accuracy. The model was trained using over 1000+
                          photos of flask with defects and no defects in
                          different lighting and angles.
                        </p>
                      </div>
                    </div>
                    <div
                      className="timeline f"
                      onMouseEnter={hoverTimeline}
                      onMouseLeave={unHoverTimeline}
                    >
                      E-Commerce Web Development
                      <div className="container wd tl">
                        <span className="small-text">Contracted</span>
                        <p className="mini-text">
                          An e-commerce website that sold various amounts of
                          clothing. I worked on the UI and payment API for the
                          website. Created 6 different layouts for the shop
                          using React.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="x">
                    <li>2014</li>
                    <li>2015</li>
                    <li>2016</li>
                    <li>2017</li>
                    <li>2018</li>
                    <li>2019</li>
                    <li>2020</li>
                    <li>2021</li>
                    <li>2022</li>
                    <li>2023</li>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {menuState === 3 && (
          <div className="column-center" ref={mainRef}>
            <div className="row development">
              <div className="row">
                <img src={fox} alt="under-mait" className="fox" />
                <div className="column">
                  <p className="big-text bold dvt">In Development</p>
                  <p className="small-text wt rt">Come back soon!</p>
                </div>
              </div>
            </div>
            <div className="row-start-80">
              <div className="bubble column">
                <span className="med-text tm">Timeless Message</span>
                <span className="mini-text tmd">
                  An AI based vocal synthesizer that creates messages in the
                  voices of passed loved ones.
                </span>
              </div>
              <div className="bubble column">
                <span className="med-text tm">80 YAMA</span>
                <span className="mini-text tmd">
                  80's retro synthesizer with filters, effects, and MIDI
                  support.
                </span>
              </div>
              <div className="bubble column">
                <span className="med-text tm">Pic2Pass</span>
                <span className="mini-text tmd">
                  A encryption system that uses principles like zero proof
                  knowledge to turn your data into color maps which are only
                  recognizable to the computer.
                </span>
              </div>
            </div>
          </div>
        )}
        {menuState === 4 && (
          <div className="column-80" ref={mainRef}>
            <div className="contact row-start">
              <div className="container">
                <span className="big-text bold cit">Contact Info</span>
                <div className="column">
                  <li className="med-text wt rt">yong.kim020901@gmail.com</li>
                </div>
              </div>
            </div>
            <p className="small-text wt rh">
              Want to contact me? Send me an email and I'll try and respond to
              you ASAP!
              <br />
              <br />
              If you're a recruiter or direct hire, please feel free to message
              me on LinkedIn or you can also send me an email.
            </p>
          </div>
        )}
        <div className="footer">
          <div className="socials">
            <span className="head">Socials</span>
            <a href="https://github.com/Spiro-001" target={"_blank"}>
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/yong-kim-645902178/"
              target={"_blank"}
            >
              LinkedIn
            </a>
            <a
              className="wt link"
              href="https://www.seanhalpin.xyz/"
              target={"_blank"}
            >
              Credits to Sean Halpin for design.
            </a>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
