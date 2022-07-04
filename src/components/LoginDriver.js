import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import TitleCard from "./TitleCard.js"

import classes from "./Form.module.css";

const Form = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  // create state variables for each input
  const [id, setID] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://whispering-eyrie-86232.herokuapp.com/drivers/" + id)
      .then((response) => {
        console.log(response);
        if (response.status === 500) {
          setOpen(true);
        } else {

          fetch("https://whispering-eyrie-86232.herokuapp.com/riders")
          .then((res) => {
            console.log(res);
            if (res.status === 500) {
              setOpen(true);
            } else {
              navigate("/welcome/" + id, {driver: response.json(), riders: res.json()});
            }
          })
          .catch(() => {
            setOpen(true);
          });
        }
      })
      .catch(() => {
        setOpen(true);
      });
  };

  return (
    <React.Fragment>
      {" "}
      <div className={classes.root}>
      <TitleCard title="Login as Driver"></TitleCard>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              className={classes.form}
              label="UTEID"
              variant="filled"
              required
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          </div>

          <div className={classes.but}>
            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
          </div>
        </form>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Failed to remove"
          action={action}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Failed to remove. Please try again.
          </Alert>
        </Snackbar>
      </div>
    </React.Fragment>
  );
};

export default Form;
