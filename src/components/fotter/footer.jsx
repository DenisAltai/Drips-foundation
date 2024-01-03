import * as React from "react";
import "./footer.css";
import logo_footer from "../../img/image.svg";
import img_mail from "../../img/icon/iconMail.svg";
import img_call from "../../img/icon/iconCall.svg";
import iconFB from "../../img/icon/iconFB.svg";
import iconT from "../../img/icon/iconTwitter.svg";
import iconI from "../../img/icon/iconInsta.svg";
import butt_a from "../../img/Ellipse.svg";
import butt_a_vect from "../../img/Vector.svg";

function Footer() {
  return (
    <div className="container">
      <div className="footer_row">
        <div className="img_logo_fotter">
          <img src={logo_footer} alt="logo" />
        </div>
        <div className="ul_heder">
          <ul>
            <li>
              <a href="#">Our projects:</a>
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
        </div>
        <div className="ul_contacts">
          <ul>
            <li>
              <a href="#">Contacts:</a>
            </li>
            <li>
              <a href="#">
                <img src={img_call} alt="call" />
                +48 777 777 777
              </a>
            </li>
            <li>
              <a href="#">
                <img src={img_call} alt="call" />
                +48 777 777 777
              </a>
            </li>
            <li>
              <a href="#">
                <img src={img_mail} alt="mail" />
                fundation@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="ul_media">
          <ul>
            <li>Social Media:</li>
            <li>
              <a href="#">
                <img src={iconFB} alt="FB" />
                Foundation.new
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconT} alt="twit" />
                Foundation.new
              </a>
            </li>
            <li>
              <a href="">
                <img src={iconI} alt="inst" />
                Foundation.new
              </a>
            </li>
          </ul>
        </div>
        <div className="ellips">
          <a href="#">
            <img src={butt_a} alt="" className="but_a" />
            <img src={butt_a_vect} alt="" className="vect" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
