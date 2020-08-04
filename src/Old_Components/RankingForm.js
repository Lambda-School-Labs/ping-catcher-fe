//test commit

import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  makeStyles,
  Container,
} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Axios from "axios";

import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RankingForm() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BookmarkIcon />
        </Avatar>

        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit((data) => {
            Axios.post(
              "https://ping-catcher-be.herokuapp.com/metaEvent/newSubscription",
              data
            )
              .then((res) => console.log(res))
              .catch((err) => console.log("error posting", err));
          })}
        >
          <TextField
            inputRef={register}
            name="nickname"
            variant="outlined"
            margin="normal"
            placeholder="Nickname"
            type="nickname"
            id="nickname"
            autoComplete="TIncludes"
            autoFocus
          />
          <TextField
            inputRef={register}
            name="text_includes"
            variant="outlined"
            margin="normal"
            placeholder="Text Includes"
            type="text_includes"
            id="text_includes"
            autoComplete="TIncludes"
          />

          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="event_type"
            placeholder="Event Type"
            name="event_type"
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="from_user"
            placeholder="From User"
            name="from_user"
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="from_team"
            placeholder="From Team"
            name="from_team"
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="from_channel"
            placeholder="From Channel"
            name="from_channel"
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="start_time"
            placeholder="Start Time"
            label="Start Time"
            name="start_time"
            type="time"
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="end_time"
            placeholder="End Time"
            label="End Time"
            name="end_time"
            type="time"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default RankingForm;
