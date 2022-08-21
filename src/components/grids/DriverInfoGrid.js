import React from "react";
import classes from "./CardGrid.module.css";
import { Grid, Box } from '@mui/material';
import Loading from "react-simple-loading";
import DriverInfoCard from "../cards/DriverInfoCard";



export default function DriverInfoGrid(props) {



    return (
        <div className={classes.grid}>
            <h1>Riders here</h1>
        <Box className={classes.box}>
            <Grid
        className={classes.container}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '60vh' }}
      >
        {props.riders.length === 0 ? (
          <Loading/>
        ) : (
          props.riders.filter(rider => rider.driver === props.driver._id).map(rider => 
            <Grid item key={rider._id} xs={12} sm={12} md={12} style={{ display: "flex", width: "100%"}}>
             <DriverInfoCard rider={rider}></DriverInfoCard>
             </Grid>
             )
          
        )}
      </Grid>
            </Box>
        </div>
    );
}