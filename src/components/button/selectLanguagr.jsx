// LanguageSelector.js

import React from "react";
import "./languageSelector.css"; // Импортируем стили

const LanguageSelector = () => {
  return (
    <div className="language-selector-container">
      <label htmlFor="language-select"></label>
      <select id="language-select" className="language-selector">
        <option value="en">EN</option>
        <option value="uk">UA</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
