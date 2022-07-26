import * as React from "react";
import {Grid, Box} from "@mui/material";
import ViewCard from "../cards/ViewCard";
import Loading from "react-simple-loading";

import classes from "./CardGrid.module.css";

/* Grid that holds all drivers and riders in View Tab */

export default function CardGrid(props) {
  return (
    <div className={classes.grid}>
      <Box className={classes.box}>
      <Grid
        className={classes.container}
        container
        spacing={2}
        justifyContent="flex-start"
        alignItems="stretch"
      >
        {props.items.length === 0 ? (
          <Loading/>
        ) : (
          props.items.map((driver) => (
            <Grid item key={driver._id} xs={12} sm={6} md={4} style={{ display: "flex" }}>
              <ViewCard
                firstName={driver.firstName}
                lastName={driver.lastName}
                notes={driver.notes}
                quantity={driver.quantity}
                riderslist={props.riders.filter((el) => {
                  return el.driver === driver._id;
                })}
                church={driver.church}
                time={driver.time}
              />
            </Grid>
          ))
        )}
      </Grid>
      </Box>
    </div>
  );
}
