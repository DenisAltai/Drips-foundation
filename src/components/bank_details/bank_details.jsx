import React from "react"; // Import React
import "./bank_detail.css";
import MyButton from "../button/button_bank.jsx";
import img_copy from "../../img/icon/iconCopy.svg";

function Bank() {
  return (
    <div className="bank_row">
      <div className="bank">
        <div className="info">
          <ul>
            <li className="Medical">Medical Aid Fund</li>
            <li className="Our_mission">
              Our mission is to help those who help us
            </li>
            <li className="style_button">
              <MyButton>Donate</MyButton>
            </li>
          </ul>
        </div>
        <div className="bank_in">
          <h2>Bank details:</h2>
          <ul>
            <li className="bank_str1">
              <p>Euro bank account:</p>
              <span>0000 0000 0000 0000</span>
              <img src={img_copy} alt="copy" className="img_copy" />
            </li>
            <li className="bank_str2">
              <p>Euro bank account:</p>
              <span>0000 0000 0000 0000</span>
              <img src={img_copy} alt="copy" className="img_copy" />
            </li>
            <li className="bank_str3">
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

export default Bank;
