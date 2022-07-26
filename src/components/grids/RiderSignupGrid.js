import * as React from "react";
import RiderSignUpCard from "../cards/RiderSignupCard";
import classes from "./CardGrid.module.css";
import { Grid, Button, Box } from '@mui/material';

/* Grid that holds all available drivers in rider sign up page */

export default function RiderSignUpGrid(props) {

  return (
    <div className={classes.grid}>
      <h2>Select your driver</h2>
      <h3>{props.driver===""?"None": props.drivers.find(x => x._id === props.driver).firstName} {props.driver===""?"": props.drivers.find(x => x._id === props.driver).lastName} selected</h3>
      <Box className={classes.smallbox}>
      <Grid
        className={classes.container}
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
      >
        {props.drivers.map((driver) => (
          <Grid item xs={12} sm={6} md={4} key={driver._id}>
            <RiderSignUpCard
              addDriver={props.addDriver}
              id={driver._id}
              firstName={driver.firstName}
              lastName={driver.lastName}
              quantity={driver.quantity}
              riders={driver.riders}
              church={driver.church}
              time={driver.time}
            ></RiderSignUpCard>
          </Grid>
        ))}
      </Grid>
      </Box>
      <div className={classes.but}>
        <Button onClick={props.submitForm} variant="contained" color="primary">
          Sign up
        </Button>
      </div>
    </div>
  );
}
