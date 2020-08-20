// Drawer to display subscription info

import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Axios from "axios";

const SubDrawer = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    console.log("subs endpoint:", subs);
    Axios.get("https://ping-catcher-be.herokuapp.com/rankings")
      .then((res) => {
        setSubs(res.data);
      })
      .catch((err) => {
        console.log("error on subscription", err);
      });
  }, []);

  return (
    <List>
      {/* will map over backend endpoint for subscriptions */}
      {["Subscription", "SecondSubscription", "ThirdSubscription"].map(
        (text) => (
          <ListItem button key={text}>
            <ListItemText primary={"• " + text} />
          </ListItem>
        )
      )}
    </List>
  );
};

export default SubDrawer;
