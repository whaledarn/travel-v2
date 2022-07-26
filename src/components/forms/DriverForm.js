import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as constants from "../../churchConstants.js";

import classes from "./Form.module.css";

/* Log in as Driver */

const DriverForm = () => {
  // create state variables for each input
  const [id, setID] = useState("");
  const [church, setChurch] = useState(0);
  const [time, setTime] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [quantity, setQuantity] = useState();
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => { // submitting form
    e.preventDefault();

 
    fetch("https://whispering-eyrie-86232.herokuapp.com/drivers", { // posting to database
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        userid: id,
        first: firstName,
        last: lastName,
        email: email,
        phone: number,
        church: church,
        time: time,
        quantity: quantity,
        notes: notes,
      }),
    })
      .then((response) => {
        if (response.status === 500) navigate("/error"); // if error, navigate to error page
      })
      .catch(() => {
        navigate("/error");
      });

    navigate("/home"); // otherwise navigate to home page
  };

  return (
    <div className={classes.root}>
      <form className={classes.formguide} onSubmit={handleSubmit}>
        <div>
          <TextField
            className={classes.form2}
            label="First Name"
            variant="filled"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            className={classes.form2}
            label="Last Name"
            variant="filled"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <TextField
          className={classes.form}
          label="Email Address"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <TextField
            className={classes.form2}
            label="Phone Number"
            variant="filled"
            type="number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <TextField
            className={classes.form2}
            label="UTEID"
            variant="filled"
            required
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>

        <div>
          <TextField
            className={classes.form2}
            select
            label="Church"
            required
            value={church}
            variant="filled"
            onChange={(e) => setChurch(e.target.value)}
          >
            {constants.churches.map((c, index) => (
              <MenuItem key={c} value={index}>
                {c}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className={classes.form2}
            select
            label="Time"
            required
            value={time}
            variant="filled"
            onChange={(e) => setTime(e.target.value)}
          >
            {constants.times[church].map((t, index) => (
              <MenuItem key={t} value={index}>
                {t}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          <TextField
            className={classes.form2}
            label="How many people can you take?"
            variant="filled"
            type="number"
            required
            InputProps={{ inputProps: { min: 0, max: 6 } }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <TextField
            className={classes.form2}
            label="Notes"
            variant="filled"
            required
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className={classes.but}>
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DriverForm;
