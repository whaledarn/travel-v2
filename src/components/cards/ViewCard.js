import * as React from "react";
import {Card, CardContent, Typography, Divider} from "@mui/material";
import * as constants from "../../churchConstants.js";

/* Card in View Tab that shows a driver and all its riders */

export default function ViewCard(props) {
  function getEmpty() {
    let content = [];
    for (let i = 0; i < props.quantity - props.riderslist.length; i++) {
      content.push(
        <React.Fragment key={i}>
        <Typography variant="h6" component="div">
          <b>Open Seat</b>
        </Typography>
        <Divider></Divider>
      </React.Fragment>
      );
    }
    return content;
  }

  return (
    <Card
    
      sx={{ minWidth: 275 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          {constants.churches[props.church]} @{" "}
          {constants.times[props.church][props.time]}
        </Typography>
        <Typography variant="h5" component="div">
          {props.firstName + " " + props.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.notes}
        </Typography>
        <Divider></Divider>
        {props.riderslist.map((rider) => (
          <React.Fragment key={rider._id}>
            
            <Typography variant="h6" component="div">
              {rider.firstName} {rider.lastName}
            </Typography>
            <Divider></Divider>
          </React.Fragment>
        ))}
        {getEmpty()}
      </CardContent>
    </Card>
  );
}
