import React from "react"; // Import React
import logo from "../../img/logo.svg";
import MyButton from "../button/button.jsx";
import LanguageSelector from "../button/selectLanguagr.jsx";
import msg from "../../img/chatHeader.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <a href="#!">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#">
                  <p>
                    <span>Our</span> projects
                  </p>
                </a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="styLang">
            <LanguageSelector />
          </div>
          <div className="butStyle">
            <MyButton>
              Support us <img src={msg} alt="chatImg" />
            </MyButton>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
