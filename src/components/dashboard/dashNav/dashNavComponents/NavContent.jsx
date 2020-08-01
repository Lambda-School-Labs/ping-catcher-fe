import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchBoxNav from "./SearchBox";
import ProfileMenu from "./ProfileMenu"
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
        <ProfileMenu />
      </div>
    </>
  );
}
export default NavBarContent;
