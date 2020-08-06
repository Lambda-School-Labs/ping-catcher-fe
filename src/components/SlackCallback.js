import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const SlackCallback = (props) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    props.setSlackState(location);
    history.push("/");
  }, [location, history, props]);

  return <div></div>;
};

export default SlackCallback;
