import * as React from "react";
import {Grid, Box} from "@mui/material";
import BasicCard from "./BasicCard";
import Loading from "react-simple-loading";

import classes from "./CardGrid.module.css";

export default function CardGrid(props) {
  return (
    <div className={classes.grid}>
      <h2>View Current Signups</h2>
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
              <BasicCard
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
