import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import NavBarContent from "./dashNavComponents/NavContent";

// import the appBar theme from page component
const DashNavbar = ({ style, darkMode, setDarkMode }) => {
  return (
    <AppBar className={style}>
      <Toolbar>
        <img src="/images/Ping_Catcher.png" alt="Ping Catcher" width="9%" />
        <NavBarContent darkMode={darkMode} setDarkMode={setDarkMode} />
      </Toolbar>
    </AppBar>
  );
};
export default DashNavbar;
