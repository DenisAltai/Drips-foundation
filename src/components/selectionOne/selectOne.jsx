import React from "react"; // Import React
import bImg from "../../img/baGrImg1.svg";
import docImg from "../../img/imageDoc.svg";
import icon24 from "../../img/icon/icon24.svg";
import iconBox from "../../img/icon/iconBox.svg";
import iconHart from "../../img/icon/iconHart.svg";
import Button from "../button/button.jsx";
import "./selectionOne.css";

function SelectionOne() {
  return (
    <div className="container">
      <div className="selection__row">
        <div className="bacgraund__img">
          <img src={bImg} alt="img" />
          <div className="button">
            <Button>I want to help</Button>
          </div>
          <div>
            <span className="medical">Medical Aid Fund</span>
          </div>
          <div>
            <span className="mission">
              Our mission is to help those who help us
            </span>
          </div>
          <div className="docImg">
            <img src={docImg} alt="Doc" />
          </div>
          <div className="icon24">
            <img src={icon24} alt="icon24" />
          </div>

          <div className="iconBox">
            <img src={iconBox} alt="iconBox" />
          </div>

          <div className="iconHart">
            <img src={iconHart} alt="iconHart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionOne;
