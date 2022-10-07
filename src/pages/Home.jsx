import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";

import Header from "../components/Header";
import Footer from "../components/Footer";

import logo from "../assets/logo.png";

export default function Home() {
  let text1 = useRef(null);
  // let text2 = useRef(null);
  // let text3 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = gsap.timeline();
  useEffect(() => {
    timeline_home.from(
      [text1],
      {
        duration: 0.7,
        skewY: 15,
        y: 400,
        stagger: {
          amount: 0.2,
        },
      },
      "-=1.2"
    );
    timeline_home.from(p1, {
      duration: 0.5,
      x: -100,
      delay: 0.2,
      opacity: 0,
    });
  });
  return (
    <HomeStyle>
      <div className="home">
        {/* <Header timeline={timeline_home} /> */}
        <div className="container">
          <div className="container1">
            <div className="txt-line" id="1">
              <img className="logo" src={logo} alt="" />
            </div>
          </div>
          {/* <div className="logo-svg"></div> */}
        </div>
        <div className="my-social-main-reel">
          <div className="social-set-boxes">
            <a
              href="https://www.instagram.com/sob_75019/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social-set-box">
                <h1 className="social-set-box-h1">INSTAGRAM</h1>
                <p className="social-set-box-p">
                  {/* Ut incididunt adipisicing nulla veniam sint dolor amet veniam
                  occaecat occaecat commodo minim. */}
                  ___
                </p>
                {/* <p>___</p> */}
              </div>
            </a>
            <a
              href="https://www.youtube.com/channel/UCFQchEskW2IAgPj6LHW4Waw"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social-set-box">
                <h1 className="social-set-box-h1">YOUTUBE</h1>
                <p className="social-set-box-p">
                  {/* Ut incididunt adipisicing nulla veniam sint dolor amet veniam
                  occaecat occaecat commodo minim. */}
                  ___
                </p>
                {/* <p>___</p> */}
              </div>
            </a>
            <a
              href="https://music.apple.com/us/artist/sob/1559195046"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social-set-box">
                <h1 className="social-set-box-h1">APPLE MUSIC</h1>
                <p className="social-set-box-p">
                  {/* Ut incididunt adipisicing nulla veniam sint dolor amet veniam
                  occaecat occaecat commodo minim. */}
                  ___
                </p>
                {/* <p>___</p> */}
              </div>
            </a>{" "}
            <a
              href="https://www.deezer.com/fr/artist/128151872"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social-set-box">
                <h1 className="social-set-box-h1">DEEZER</h1>
                <p className="social-set-box-p">
                  {/* Ut incididunt adipisicing nulla veniam sint dolor amet veniam
                  occaecat occaecat commodo minim. */}
                  ___
                </p>
                {/* <p>___</p> */}
              </div>
            </a>{" "}
          </div>
        </div>
        <div className="my-skills-main-reel">
          <Footer />
        </div>
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 50vh;
    width: 100%;
    margin-top: -70px;
    /* margin-bottom: -45px; */
  }
  .container1 {
    font-weight: 700;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 100px;
    height: 100%;
    justify-content: center;
    overflow: hidden;
  }
  .container2 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    /* height: 50vh; */
    width: 100%;
    margin-top: -70px;
    margin-bottom: 15px;
  }
  .txt-line {
    overflow: hidden;
  }
  .logo {
    position: relative;
    padding-top: 100px;
    max-height: 60%;
  }
  .image_desc {
    padding-top: 50px;
    text-align: center;
  }
  .txt-line p {
    font-size: 130px;
    text-transform: capitalize;
    /* letter-spacing: -4px; */
    overflow: hidden;
    height: 100%;
    /* line-height: 90%; */
  }
  .txt-line-title {
    overflow: hidden;
  }
  .txt-line-title p {
    font-size: 130px;
    text-transform: capitalize;
    /* letter-spacing: -4px; */
    overflow: hidden;
    height: 100%;
    /* line-height: 90%; */
    font-weight: 900;
    background-color: white;
    /* background-image: linear-gradient(45deg, #233a4e, #9c6db0); */
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  .line-bottom {
    /* margin-top: -130px; */
  }
  .right-side-menu {
    position: absolute;
    top: 40vh;
    text-align: right;
    right: 60px;
  }
  .right-side-menu p {
    font-size: 20px;
    cursor: pointer;
    font-weight: lighter;
  }
  .left-side-quote {
    margin-left: 120px;
  }
  .left-side-quote p {
    font-size: 25px;
    /* text-transform: uppercase; */
  }
  .logo-svg {
    margin-left: 150px;
    margin-top: -250px;
  }
  .flower-svg img {
    animation: animate-rotate 30s infinite linear;
    width: 80px;
  }
  .short-about {
    /* margin-top: 25vh; */
    font-size: 15rem;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
  }
  .main-h1-short-about {
    margin-top: 100px;
  }
  .sub-main-p-short-about {
    /* margin-top: 120px; */
  }
  .short-about h1 {
    font-size: 80px;
    font-weight: 500;
    /* margin-bottom: -150px; */
    letter-spacing: -2px;
    text-align: center;
  }
  .short-about p {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    margin-top: 20px;
  }
  .another-svg {
    margin-top: 50px;
  }
  .short-about .another-svg img {
    width: 50px;
    animation: animate-rotate 10s infinite linear;
  }
  .social-button {
    margin-top: 75px;
    flex-direction: column;
    max-width: 350px;
    margin: 0 auto;
    margin-top: 5rem;
    gap: 5rem;
  }
  .btn {
    font-size: 1.2rem;
    font-weight: 400;
    border: 1px solid var(--white);
    margin-right: 5px;
    background-color: #03113c;
    border-radius: 5px;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    padding: 8px 25px 8px 25px;
    overflow: hidden;
    &:hover {
      color: var(--white);
      transform: scale(1.1);
      transform: translate(3px, -3px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--shadow-color);
      /* background-image: linear-gradient(45deg, #233a4e, #9c6db0); */
      background-size: 100%;
      background-repeat: repeat;
    }
  }

  @keyframes animate-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .my-skills-main-reel {
    width: 100%;
    overflow: hidden;
  }
  .my-skills-reel {
    /* margin-top: 300px; */
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: fit-content;
    will-change: transform;
    animation: animation-reel 60s infinite linear;
  }
  a {
    text-decoration: none;
  }
  @keyframes animation-reel {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .reel-item {
    font-weight: 400;
    font-size: 180px;
    text-transform: uppercase;
  }
  .skill-set-boxes {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;
    width: 100%;
    height: fit-content;
    flex-wrap: wrap;
  }

  .skill-set-box {
    position: relative;
    /* margin: 15px 10px; */
    display: flex;
    width: 320px;
    height: 170px;
    color: #e6e6e6;
    flex-direction: column;
    border: 1px solid var(--white);
    transition: color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    transition: background-color 1s cubic-bezier(0.16, 1, 0.3, 1);
    transition: border 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 5px;
  }
  .skill-set-box:hover {
    color: #161616;
    background-color: #f0f0f0;
    border: 1px solid var(--white);
    background-image: linear-gradient(45deg, #233a4e, #9c6db0);
    background-size: 100%;
    background-repeat: repeat;
  }
  .skill-set-box h1,
  .skill-set-box p {
    margin: 0px 30px;
    font-weight: lighter;
    text-transform: uppercase;
  }
  .skill-set-box h1 {
    margin-top: 35px;
    font-size: 20px;
    font-weight: 900;
  }
  .skill-set-box p {
    margin-top: 20px;
    font-size: 13px;
  }
  .my-social-main-reel {
    width: 100%;
    overflow: hidden;
  }
  .social-set-boxes {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;
    width: 100%;
    height: fit-content;
    flex-wrap: wrap;
  }

  .social-set-box {
    margin: 15px 10px;
    display: flex;
    width: 350px;
    height: 170px;
    color: #e6e6e6;
    flex-direction: column;
    /* border: 0.1px solid #f0f0f0; */
    transition: color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    transition: background-color 1s cubic-bezier(0.16, 1, 0.3, 1);
    transition: border 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 5px;
  }
  .social-set-box:hover {
    color: #161616;
    background-color: #f0f0f0;
    border: 1px solid var(--white);
    /* background-image: linear-gradient(45deg, #233a4e, #9c6db0); */
    background-size: 100%;
    background-repeat: repeat;
  }
  .social-set-box h1,
  .social-set-box p {
    margin: 0px 30px;
    font-weight: lighter;
    text-transform: uppercase;
  }
  .social-set-box h1 {
    margin-top: 35px;
    font-size: 20px;
    font-weight: 900;
  }
  .social-set-box p {
    margin-top: 20px;
    font-size: 13px;
  }
  .project-and-work {
    display: flex;
    align-items: center;
    /* text-align: center; */
    justify-content: center;
    width: 80%;
    margin-left: 10%;
    margin-top: 100px;
    margin-bottom: 100px;
    flex-direction: column;
    height: 30vh;
    padding-top: 100px;
    padding-bottom: 100px;
    border-top: 1px dashed white;
    border-bottom: 1px dashed white;
  }
  .project-and-work h1 .h1-project {
    text-decoration: none;
    color: var(--font-color);
    font-size: 80px;
    font-weight: 500;
  }
  .project-and-work p {
    color: var(--font-color);
    font-size: 20px;
    margin-top: -20px;
  }
  .h1-project img {
    width: 90px;
  }

  @media (max-width: 1200px) {
    .txt-line p {
      font-size: 100px;
      letter-spacing: -5px;
      font-weight: 500;
    }
    .line-bottom {
      margin-top: 10px;
    }
    .flower-svg {
      display: none;
    }
    .short-about h1 {
      font-size: 100px;
      margin: 0;
      line-height: 88%;
    }
    .short-about p {
      margin-top: 5px;
      font-weight: 300;
    }
    .sub-main-p-short-about {
      margin-top: 10px;
    }
    .reel-item {
      font-size: 100px;
    }
    .project-and-work h1 .h1-project {
      font-size: 50px;
    }
    .project-and-work h1 .h1-project img {
      width: 30px;
    }
    .project-and-work p {
      margin-top: -30px;
    }
    .skill-set-box {
      margin: 10px 5px;
    }
  }
  @media (max-width: 600px) {
    .logo {
      max-width: 50%;
      position: relative;
    }
    .image_desc {
      /* max-width: 70%; */
    }
    .image_desc img {
      max-width: 100%;
    }
    .short-about p {
      font-size: 16px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 15px;
    }
    .container {
      height: auto;
    }
    .txt-line p {
      font-size: 39px;
      font-weight: 700;
      letter-spacing: -2px;
      margin-bottom: 12px;
    }
    .line-bottom {
      margin-top: 10px;
    }

    .left-side-quote {
      margin-left: 10vw;
    }
    .left-side-quote p {
      font-size: 16px;
    }
    .container1 {
      padding: 0px 35px;
    }
    .short-about h1 {
      font-size: 60px;
      margin: 0;
      line-height: 88%;
    }
    .reel-item {
      font-size: 60px;
    }
    .main-h1-short-about {
      margin-left: 10px;
      margin-right: 10px;
    }
    .short-about h1 {
      font-size: 39px;
      margin-bottom: 15px;
    }
    .logo {
      margin-left: 0px;
    }
  }
`;
