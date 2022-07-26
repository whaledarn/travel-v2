import * as React from "react";
import {Card, CardContent, Typography, CardActionArea} from "@mui/material";
import * as constants from "../../churchConstants.js";

/* Card that shows an available driver's information on second page of rider sign up */

export default function RiderSignUpCard(props) {
  const getID = () => {
    props.addDriver(props.id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={getID}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.firstName} {props.lastName}
          </Typography>
          <Typography variant="h6">
            {constants.churches[props.church]} @{" "}
            {constants.times[props.church][props.time]}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {props.quantity - props.riders.length} seats left
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
