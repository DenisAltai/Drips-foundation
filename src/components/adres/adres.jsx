import * as React from "react";
import "./adres.css";
import img_mail from "../../img/icon/iconMail.svg";
import img_call from "../../img/icon/iconCall.svg";
import MapComponent from "./map.jsx";
import img_copy from "../../img/icon/iconCopy.svg";
import img_logo from "../../img/logo_fff.svg";

function Adres() {
  return (
    <div className="container">
      <div className="adres">
        <div className="info_telephon">
          <h3>Contact us</h3>
          <ul>
            <li>
              <img src={img_call} alt="call" /> +48 777 777 777
            </li>
            <li>
              <img src={img_call} alt="call" />
              +48 777 777 777
            </li>
            <li>
              <img src={img_mail} alt="mail" /> fundation@gmail.com
            </li>
          </ul>
        </div>
        <div className="img_logo">
          {" "}
          <img src={img_logo} alt="logo" />
        </div>
        <div className="info_map">
          <MapComponent />
        </div>
        <div className="bank_info">
          <h3>Bank details:</h3>
          <ul>
            <li>
              <p>Euro bank account:</p>
              <span>0000 0000 0000 0000</span>
              <img src={img_copy} alt="copy" className="img_copy" />
            </li>
            <li>
              <p>Euro bank account:</p>
              <span>0000 0000 0000 0000</span>
              <img src={img_copy} alt="copy" className="img_copy" />
            </li>
            <li>
              <p>Euro bank account:</p>

              <span>0000 0000 0000 0000</span>
              <img src={img_copy} alt="copy" className="img_copy" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Adres;
