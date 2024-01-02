import * as React from "react";
import img_phon from "../../img/icon/iconPhon.svg";
import "./work_in_company.css";

function Work() {
  return (
    <div className="container">
      <div className="work_in_company">
        <div className="text_work">
          <h2>Work in company name means</h2>
          <p>Some small text why this is important icons for us</p>
          <p>Some small text why this is important icons for us</p>
        </div>
        <div className="ul_li_components">
          <ul>
            <li>
              <img src={img_phon} alt="img_phon" />
              <h4>Knowalage</h4>
              <p>
                The creativiti is <br />
                one of main goals
              </p>
            </li>
            <li>
              <img src={img_phon} alt="img_phon" />
              <h4>Knowalage</h4>
              <p>Knowledge backed by experience</p>
            </li>
            <li>
              <img src={img_phon} alt="img_phon" />
              <h4>Knowalage</h4>
              <p>Knowledge backed by experience</p>
            </li>
            <li>
              <img src={img_phon} alt="img_phon" />
              <h4>Knowalage</h4>
              <p>Knowledge backed by experience</p>
            </li>
          </ul>
        </div>
        <div className="ul_li_components">
          {" "}
          <ul>
            <li>
              <img src={img_phon} alt="img_phon" />
              <h4>Knowalage</h4>
              <p>
                The creativiti is <br /> one of main goals
              </p>
            </li>
            <li>
              <img src={img_phon} alt="img_phon" />
              <h4>Knowalage</h4>
              <p>Knowledge backed by experience</p>
            </li>
            <li>
              <img src={img_phon} alt="img_phon" />
              <h4>Knowalage</h4>
              <p>Knowledge backed by experience</p>
            </li>
            <li>
              <img src={img_phon} alt="img_phon" />
              <h4>Knowalage</h4>
              <p>Knowledge backed by experience</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Work;
