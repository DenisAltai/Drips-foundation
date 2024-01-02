import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Предполагается, что у вас есть файл App.js для вашего основного компонента

import "./style/reset.css";
import "./style/common.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
