import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const SlackCallback = (props) => {
  // const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    props.setSlackState(location.search);
    // history.push("/");
  }, []);

  // Removed these from line 11, placing them here for backup.
  // location, history, props

  return <Link to="/profile" >Click Here to Continue... </Link>;
};

export default SlackCallback;
