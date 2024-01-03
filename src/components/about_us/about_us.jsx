import React from "react"; // Import React
import img_doc from "../../img/Doc_grl_small.svg";
import img_doc2 from "../../img/imgDocGirl.svg";
import logo from "../../img/logo_dryps.svg";
import "./about_us.css";

function AboutUs() {
  return (
    <div className="container">
      <h2>About Us</h2>
      <div className="about">
        <div className="about_box">
          <div className="about_box_1">
            <div className="founder">
              <h3>Founder</h3>
              <p>
                A charitable foundation is an organization established to help
                and support those in need and make a positive contribution to
                society. These foundations play an important role in improving
                the quality of life and creating better conditions for people
                suffering from poverty, disease, violations of rights
              </p>
              <h3>“Some qoute of founder” (c) Founder</h3>
            </div>
            <div className="photo">
              <img src={img_doc} alt="img_doc" />
              <p>Jach Dye CEO</p>
              <span>“COmpany name”</span>
            </div>
            <div className="img_lo">
              <div className="img_1">
                <img src={logo} alt="logo" />
              </div>
              <div className="img_2">
                <img src={logo} alt="logo" />
              </div>
            </div>
          </div>
          <div className="about_foundation">
            <h3>About foundation</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen{" "}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <div className="photo_2">
              <img src={img_doc2} alt="img_doc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
