import * as React from "react";
import classes from "./TitleCard.module.css";

/* Simple Title Card for all Tabs */

export default function TitleCard(props) {
  return (
    <div className={classes.title}>
      <h1>{props.title}</h1>
    </div>
  );
}
