import React from "react";
import styled from "styled-components";

// import "./Footer.css";
export default function Footer() {
  return (
    <FooterStyle>
      <div>
        <div className="footer">
          <div className="footer-container">
            <div className="message-for-users">
              <span></span>
            </div>
            {/* <div className="social-links">
              <div className="social-links-h"></div>
              <div className="social-links-items">
                <a href="https://coinmarketcap.com/"></a>
                <a href="https://coinmarketcap.com/"></a>
                <a href="https://coinmarketcap.com/"></a>
                <a href="https://coinmarketcap.com/"></a>
              </div>
            </div>
            <div className="footer-menu social-links">
              <div className="footer-menu-h social-links-h"></div>
              <div className="footer-menu-links social-links-items">
                <p className="footer-menu-links-items"></p>
                <p className="footer-menu-links-items"></p>
                <p className="footer-menu-links-items"></p>
                <p className="footer-menu-links-items"></p>
              </div>
            </div> */}
            <div className="footer-btn">
              <a
                href="https://open.spotify.com/artist/1gXVG8KPMDjoxqcmmCWqCN"
                target="_blank"
                rel="noreferrer"
                className="footer-btn-a"
              >
                Spotify Page
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="left-footer-bottom">{/* <p>Footer Flag</p> */}</div>
            <div className="right-footer-bottom">{/* <p>Copyright</p> */}</div>
          </div>
        </div>
        <div className="bg-footer-ticker">
          <div className="footer-ticker">
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
            <div className="footer-ticker-item">&nbsp; - Footer Item </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    /* margin-top: 150px;
    height: 500px; */
    /* background-color: #161616;
     */
    background-color: var(--black);
    text-transform: uppercase;
    color: white;
  }
  .footer-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 80%;
  }
  .footer-container .message-for-users span {
    font-size: 14px;
    font-weight: lighter;
    margin: 20px;
  }
  .footer-container .social-links {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
  }
  .footer-container .social-links .social-links-h {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .footer-container .social-links .social-links-items {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .footer a,
  .footer p {
    color: white;
    text-decoration: none;
    font-size: 15px;
    font-weight: lighter;
    cursor: pointer;
    margin-top: 5px;
    border-bottom: 1px dashed transparent;
    transition: border 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .footer-container p:hover,
  .footer-container a:hover {
    border-bottom: 1px dashed white;
    transition: text-decoration 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .footer-btn {
    padding: 85px 50px;
    border: 1px dashed white;
    border-radius: 90%;
    margin: 10px;
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
  .left-footer-bottom {
    margin-left: 80px;
  }
  .right-footer-bottom {
    margin-right: 50px;
  }
  .bg-footer-ticker {
    background-color: white;
  }
  .footer-ticker {
    width: 100%;
    overflow: hidden;
    background-color: white;
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: fit-content;
    will-change: transform;
    animation: animation-reel 60s infinite linear;
  }
  .footer-ticker- {
  }
  @keyframes animation-reel {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .footer-ticker-item {
    font-weight: light;
    color: black;
    font-family: "Kanit", sans-serif;
    font-size: 13px;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    .footer {
      height: 550px;
    }
    .footer-container {
      flex-wrap: wrap;
      /* height: 100%; */
    }
    .message-for-users span {
      display: none;
    }
    .footer-bottom {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .left-footer-bottom {
      margin-left: 0px;
    }
    .right-footer-bottom {
      margin-right: 0px;
    }
  }
  @media (max-width: 400px) {
    .footer {
      height: 850px;
    }
    .left-footer-bottom p {
      margin-left: 0px;
      font-size: 12px;
    }
    .right-footer-bottom p {
      margin-right: 0px;
      font-size: 12px;
    }
  }
`;
