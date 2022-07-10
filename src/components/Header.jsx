import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";

import MenuIcon from "../assets/menu.svg";

export default function Header({ timeline }) {
  let li1 = useRef(null);
  let li2 = useRef(null);
  let li3 = useRef(null);
  let li4 = useRef(null);

  useEffect(() => {
    timeline.from([li1, li2, li3, li4], {
      opacity: 0,
      duration: 1,
      delay: 0.2,
      y: 20,
      stagger: {
        amount: 0.6,
      },
    });
  });
  return (
    <HeaderStyle>
      <div>
        <header>
          <div id="logo"></div>
          <div className="toggle-menu">
            <img src={MenuIcon} alt="" />
          </div>
          <ul className="menu-items">
            <li ref={(el) => (li1 = el)}>
              <Link to="/" className="li">
                Home
              </Link>
            </li>
            {/* <li ref={(el) => (li2 = el)}>
              <Link to="/about" className="li">
                About Us
              </Link>
            </li> */}
            <li ref={(el) => (li2 = el)}>
              <a
                href="https://app.gitbook.com/s/AbezcOZUAHolNqHaGhgb/"
                className="li-a"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
            </li>
            <li ref={(el) => (li3 = el)}>
              {" "}
              <Link to="/reviews" className="li">
                Reviews
              </Link>
            </li>
            <li ref={(el) => (li4 = el)}>
              <Link to="/contact" className="li">
                Launch App
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1000;
    transition: 0.6s ease-in-out;
  }
  #logo {
    font-size: 1.2vw;
    transition: 0.6s ease-in-out;
    font-weight: bold;
  }
  .toggle-menu {
    display: none;
  }
  .menu-items {
    position: fixed;
    top: 20px;
    right: 60px;
    list-style: none;
    text-align: right;
    transition: 0.6s ease-in-out;
    transition: display 1s ease-in-out;
  }
  .li-a {
    text-decoration: none;
  }
  .li-a:hover {
    font-weight: 900;
    background-color: white;
    background-image: linear-gradient(45deg, #233a4e, #9c6db0);

    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  .menu-items li,
  .li {
    margin-top: 10px;
    text-transform: uppercase;
    font-size: 20px;
    overflow: hidden;
    color: var(--font-color);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    margin-left: 20px;
    mix-blend-mode: difference;
  }
  .li:hover {
    font-weight: 900;
    background-color: white;
    background-image: linear-gradient(45deg, #233a4e, #9c6db0);

    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  .li:hover::before {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: 0 50%;
    transition: trasnform 0.7s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.1s linear;
  }
  .li::before {
    font-weight: 900;
    content: "";
    position: absolute;
    left: auto;
    /* color: var(--brand-color); */
    margin-top: 22px;
    width: 40%;
    height: 2px;
    overflow: hidden;
    transform: scaleX(0.001);
    opacity: 0;
    transform-origin: 100% 50%;
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1),
      opacity 0.1s linear 0.2s;
    font-weight: 900;
    background-color: white;
    background-image: linear-gradient(45deg, #233a4e, #9c6db0);

    background-size: 100%;
    background-repeat: repeat;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  @media (max-width: 1200px) {
    .menu-items li,
    .li {
      font-size: 20px;
    }
    .li::before {
      margin-top: 23px;
    }
  }
  @media (max-width: 768px) {
    .menu-items {
      display: none;
      background-color: #161616;
      top: 80px;
      right: 20px;
      padding: 10px 0px;
    }
    .menu-items li,
    .li {
      color: #f0f0f0;
      font-size: 15px;
      padding-right: 10px;
      padding-bottom: 2px;
    }
    .li::before {
      background-color: #f0f0f0;
    }
    .toggle-menu {
      display: block;
      position: fixed;
      top: 15px;
      right: 20px;
      margin: 10px 0px;
      padding: 0px 5px;
      padding-top: 5px;
      border-radius: 1px;
      background-color: #161616;
    }
    .toggle-menu img {
      width: 40px;
      font-weight: lighter;
      color: #f0f0f0;
    }
    header:hover .menu-items {
      display: block;
    }
  }
  @media (max-width: 400px) {
    .menu-items {
      top: 60px;
      right: 10px;
    }
    .toggle-menu {
      right: 10px;
      top: 15px;
      padding: 0px 8px;
      padding-top: 4px;
    }
    .toggle-menu img {
      width: 25px;
    }
  }
`;
