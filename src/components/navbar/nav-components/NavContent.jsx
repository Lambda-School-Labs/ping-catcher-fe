import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchBoxNav from "./SearchBox";
import LogOutNav from "./LogOutNav";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  moveRight: {
    display: "flex",
    marginLeft: "auto",
  },
}));
function NavBarContent() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.moveRight}>
        <SearchBoxNav />
        <LogOutNav />
      </div>
    </>
  );
}
export default NavBarContent;
