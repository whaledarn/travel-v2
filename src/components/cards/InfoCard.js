import * as React from "react";
import {Card, CardContent, Typography} from "@mui/material";

import classes from "./InfoCard.module.css";

/* Simple info card for home page */

export default function InfoCard(props) {
  return (
    <Card className = {classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h4">
            {props.title}
          </Typography>
          <Typography variant="h6">
            {props.content}
          </Typography>
        </CardContent>
    </Card>
  );
}
