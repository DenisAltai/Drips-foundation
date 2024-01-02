import * as React from "react";
import InputForm from "./inputForm";
import "./support.css";

function Support() {
  return (
    <div className="container">
      <div className="support_row">
        <h2>Support</h2>
        <div className="support_table">
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default Support;
