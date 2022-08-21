import * as React from "react";
import {Card, CardContent, CardActionArea, Typography} from "@mui/material";
import * as constants from "../../churchConstants.js";

/* Card that shows an available driver's information on second page of rider sign up */

export default function DriverInfoCard(props) {
  const getID = () => {
    props.addDriver(props.id);
  };

  return (
    <Card       sx={{ minWidth: 275 }}
    style={{
      display: "flex",
      justifyContent: "center",
      aignContent: "center",
      flexDirection: "column",
      width: "100%",
      padding: "10px",
      margin: "10px"
    }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.rider.firstName} {props.rider.lastName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.rider.emailAddress}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.rider.phoneNumber}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.rider.address}
        </Typography>
        </CardContent>
    </Card>
  );
}
