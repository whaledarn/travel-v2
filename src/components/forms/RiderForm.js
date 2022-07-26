import React, { useState, useEffect } from "react";
import {TextField, Button} from "@mui/material";
import RiderSignUpGrid from "../grids/RiderSignupGrid";
import { useNavigate } from "react-router-dom";

import classes from "./Form.module.css";

/* Rider Sign Up Form */

const RiderForm = () => {
  const [drivers, setDrivers] = useState([]); // list of drivers

  useEffect(() => { // called when page is loaded in
    fetchList();
  }, []);

  async function fetchList() { // fetches a list of drivers
    let response = await fetch(
      "https://whispering-eyrie-86232.herokuapp.com/drivers",
      {
        mode: "cors",
      }
    );
    let data = await response.json();
    let finalData = await data.filter((entry) => { // filters for only drivers with available seats
      return entry.quantity > entry.riders.length; // total seats is greater than riders
    });
    setDrivers(finalData);
  }

  // create state variables for each input
  const [id, setID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [driver, setDriver] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => { // when you submit the first time, navigates to the second part of the form
    e.preventDefault(); 
    document.querySelector(`.${classes.second}`).style.display = "inline";
    document.querySelector(`.${classes.first}`).style.display = "none";
  };

  const addDriver = (d) => {
    setDriver(d);
  };

  const submitForm = () => { // final submit: adds rider

    fetch("https://whispering-eyrie-86232.herokuapp.com/riders", {
      // Enter your IP address here

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
        address: address,
        driver: driver,
      }),
    })
      .then((response) => { 
        console.log(response);
        if (response.status === 500) navigate("/error"); // if could not add, then navigate to error page
      })
      .catch(() => {
        navigate("/error");
      });

    navigate("/home");
  };

  return (
    <div className={classes.root}>
      <div className={classes.first}>
        <form onSubmit={handleSubmit}>
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

          <TextField
            className={classes.form}
            label="Address"
            variant="filled"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className={classes.but}>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </div>
      <div className={classes.second}>
        <RiderSignUpGrid
          drivers={drivers}
          addDriver={addDriver}
          submitForm={submitForm}
          driver={driver}
        ></RiderSignUpGrid>
      </div>
    </div>
  );
};

export default RiderForm;
