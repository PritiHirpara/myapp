import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{ marginTop: "20px", padding: "10px" }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ToggleButton;
