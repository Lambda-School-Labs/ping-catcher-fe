import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  makeStyles,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
          <LockOutlinedIcon />
        </Avatar>

        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit((data) => {
            alert(JSON.stringify(data));
          })}
        >
          <TextField
            inputRef={register}
            name="text_includes"
            variant="outlined"
            margin="normal"
            label="Text Includes"
            type="text_includes"
            id="text_includes"
            autoComplete="TIncludes"
          />

          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="event_type"
            label="Event Type"
            name="event_type"
            autoFocus
            defaultValue="Message"
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="from_user"
            label="From User"
            name="from_user"
            autoFocus
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="from_team"
            label="From Team"
            name="from_team"
            autoFocus
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="from_channel"
            label="From Channel"
            name="from_channel"
            autoFocus
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="start_time"
            label="Start Time"
            name="start_time"
            autoFocus
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            id="end_time"
            label="End Time"
            name="end_time"
            autoFocus
          />
        </form>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
}

export default RankingForm;
