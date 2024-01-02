import React from "react";
import Button from "../button/button.jsx";
import img_doc_girl from "../../img/imgDocGirl.svg";
import img_logo from "../../img/symbolPrj.svg";
import "./selectionTwo.css";

function SelectionTwo() {
  return (
    <div className="container">
      <h2>Our projects</h2>
      <div className="selection_row">
        <div className="border_box_1_3">
          <div className="box_1_3">
            <img src={img_doc_girl} alt="Doc" />
            <p>
              A charitable foundation is an organization established to help and
              support those in need and make a positive contribution to society.
              These foundations play an{" "}
            </p>
            <h3>Goal 0000</h3>
            <Button>Donate</Button>
          </div>
          <div className="text_box">
            <p>
              A charitable foundation is an organization established to help and
              support those in need and make a positive contribution to society.
              These foundations play an
            </p>
          </div>
        </div>
        <div className="border_box_2">
          <div className="text_box">
            <p>
              A charitable foundation is an organization established to help and
              support those in need and make a positive contribution to society.
              These foundations play an
            </p>
          </div>
          <div className="box_2">
            <div className="box_1_3">
              <img src={img_doc_girl} alt="Doc" />
              <p>
                A charitable foundation is an organization established to help
                and support those in need and make a positive contribution to
                society. These foundations play an{" "}
              </p>
              <h3>Goal 0000</h3>
              <Button>Donate</Button>
            </div>
          </div>
        </div>
        <div className="border_box_1_3">
          <div className="box_1_3">
            <img src={img_doc_girl} alt="Doc" />
            <p>
              A charitable foundation is an organization established to help and
              support those in need and make a positive contribution to society.
              These foundations play an{" "}
            </p>
            <h3>Goal 0000</h3>
            <Button>Donate</Button>
          </div>
          <div className="text_box">
            <p>
              A charitable foundation is an organization established to help and
              support those in need and make a positive contribution to society.
              These foundations play an
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionTwo;
