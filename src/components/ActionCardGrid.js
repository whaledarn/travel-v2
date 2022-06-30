import * as React from "react";
import ActionCard from "./ActionCard";
import classes from "./CardGrid.module.css";
import { Grid, Button } from '@mui/material';


export default function ActionCardGrid(props) {

  return (
    <div className={classes.grid}>
      <h2>Select your driver</h2>
      <h3>{props.driver===""?"None": props.drivers.find(x => x._id === props.driver).firstName} {props.driver===""?"": props.drivers.find(x => x._id === props.driver).lastName} selected</h3>

      <Grid
        className={classes.flex}
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
      >
        {props.drivers.map((driver) => (
          <Grid item xs={12} sm={6} md={4} key={driver._id}>
            <ActionCard
              addDriver={props.addDriver}
              id={driver._id}
              firstName={driver.firstName}
              lastName={driver.lastName}
              quantity={driver.quantity}
              riders={driver.riders}
              church={driver.church}
              time={driver.time}
            ></ActionCard>
          </Grid>
        ))}
      </Grid>
      <div className={classes.but}>
        <Button onClick={props.submitForm} variant="contained" color="primary">
          Sign up
        </Button>
      </div>
    </div>
  );
}
