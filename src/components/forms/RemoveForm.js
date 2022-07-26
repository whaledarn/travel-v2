import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import classes from "./Form.module.css";

/* Form to remove your sign up */

const RemoveForm = () => {
  const [open, setOpen] = useState(false); // determines whether or not the error message on bottom left pops up

  const handleClose = (event, reason) => { // handles closing the error message on bottom left
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = ( // button on the bottom left to close error message
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
  const [type, setType] = useState(0);
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => { // when submit is pressed
    e.preventDefault();
    console.log(id, reason);
    if (type === 0) { // if rider
      fetch("https://whispering-eyrie-86232.herokuapp.com/riders/" + id, {
        method: "DELETE",
      })
        .then((response) => {
          console.log(response);
          if (response.status === 500) { // if error, then pop up error message
            setOpen(true);
          } else { // otherwise successfully remove and navigate to home
            navigate("/home");
          }
        })
        .catch(() => {
          setOpen(true);
        });
    } else if (type === 1) { // else if driver
      fetch("https://whispering-eyrie-86232.herokuapp.com/drivers/" + id, {
        method: "DELETE",
      })
        .then((response) => {
          console.log(response);

          if (response.status === 500) {
            setOpen(true);
          } else {
            navigate("/home");
          }
        })
        .catch(() => {
          setOpen(true);
        });
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            className={classes.form}
            label="ID"
            variant="filled"
            required
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className={classes.form}
            select
            label="Type"
            required
            value={type}
            variant="filled"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem key={0} value={0}>
              Rider
            </MenuItem>
            <MenuItem key={1} value={1}>
              Driver
            </MenuItem>
          </TextField>
        </div>
        <div>
          <TextField
            className={classes.form}
            label="Reason"
            variant="filled"
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <div className={classes.but}>
          <Button type="submit" variant="contained" color="primary">
            Remove
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
  );
};

export default RemoveForm;
