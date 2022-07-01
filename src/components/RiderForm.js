import React, { useState, useEffect } from "react";
import {TextField, Button} from "@mui/material";
import ActionCardGrid from "./ActionCardGrid";
import { useNavigate } from "react-router-dom";

import classes from "./Form.module.css";

const RiderForm = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    let response = await fetch(
      "https://whispering-eyrie-86232.herokuapp.com/drivers",
      {
        mode: "cors",
      }
    );
    let data = await response.json();
    let finalData = await data.filter((entry) => {
      return entry.quantity > entry.riders.length;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(`.${classes.second}`).style.display = "inline";
    document.querySelector(`.${classes.first}`).style.display = "none";
  };

  const addDriver = (d) => {
    setDriver(d);
  };

  const submitForm = () => {
    var jsonData = {
      userid: id,
      first: firstName,
      last: lastName,
      email: email,
      phone: number,
      address: address,
      driver: driver,
    };
    console.log(jsonData);
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
        if (response.status === 500) navigate("/error");
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
        <ActionCardGrid
          drivers={drivers}
          addDriver={addDriver}
          submitForm={submitForm}
          driver={driver}
        ></ActionCardGrid>
      </div>
    </div>
  );
};

export default RiderForm;
