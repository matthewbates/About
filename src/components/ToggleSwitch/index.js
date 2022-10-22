import React from "react";
import { ToggleSwitchContainer } from "./ToggleSwitchElements";

const ToggleSwitch = ({ toggle, toggleTheme }) => {
  return (
    <ToggleSwitchContainer>
      <div
        onChange={toggleTheme}
        className={`wrg-toggle ${toggle ? "wrg-toggle--checked" : ""}`}
      >
        <div className="wrg-toggle-container">
          <div className="wrg-toggle-check">
            <span>🌜</span>
          </div>
          <div className="wrg-toggle-uncheck">
            <span>🌞</span>
          </div>
        </div>
        <div className="wrg-toggle-circle"></div>
        <input
          className="wrg-toggle-input"
          type="checkbox"
          aria-label="Toggle Button"
        />
      </div>
    </ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
