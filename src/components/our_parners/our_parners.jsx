import * as React from "react";
import "./our_parners.css";
import img_BrAACSB from "../../img/brands/imgBrAACSB.svg";
import img_BrMI from "../../img/brands/imgBrMI.svg";
import img_BrOsde from "../../img/brands/imgBrOsde.svg";

function our_parners() {
  return (
    <div className="container">
      <div className="our_parners_row">
        <h2>Our parners</h2>
        <div className="brand_1">
          <ul>
            <li>
              <img src={img_BrOsde} alt="brand" />
            </li>
            <li>
              <img src={img_BrMI} alt="brand" />
            </li>
            <li>
              <img src={img_BrAACSB} alt="brand" />
            </li>
            <li>
              <img src={img_BrOsde} alt="brand" />
            </li>
            <li>
              <img src={img_BrMI} alt="brand" />
            </li>
          </ul>
        </div>
        <div className="brand_1">
          <ul>
            <li>
              <img src={img_BrOsde} alt="brand" />
            </li>
            <li>
              <img src={img_BrMI} alt="brand" />
            </li>
            <li>
              <img src={img_BrAACSB} alt="brand" />
            </li>
            <li>
              <img src={img_BrOsde} alt="brand" />
            </li>
            <li>
              <img src={img_BrMI} alt="brand" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default our_parners;
