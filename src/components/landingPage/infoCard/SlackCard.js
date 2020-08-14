import React from "react";
import "./infoCard.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

const SlackCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <CardMedia
          className={classes.media}
          image="/images/slack-hash-brands.svg"
          title="Paella dish"
        />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Slack
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          Current version is built for slack. Secured with Okta and fully
          immersed within the Slack api.
        </Typography>
      </CardContent>
    </Card>

    // <article className="center info-card">
    //   <img
    //     src="/images/slack-hash-brands.svg"
    //     alt="The communication platform"
    //     data-testid="at-img"
    //     className="info-img"
    //     width="150px"
    //   />
    //   <h2 className="info-title">Slack</h2>
    //   <p className="lighten">
    //     Current version is built for slack. Secured with Okta and fully immersed
    //     within the Slack api.
    //   </p>
    // </article>
  );
};
export default SlackCard;
