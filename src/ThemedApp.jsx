import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import ToggleButton from "./ToggleButton";

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>Theme Switching with useContext</h1>
      <ToggleButton />
    </div>
  );
};

export default ThemedApp;
