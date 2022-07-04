import * as React from "react";
import classes from "./ErrorPage.module.css";

export default function DNE() {
  return (
    <div className={classes.fof}>
      <h1>Error 404</h1>
      <h2><span style={{color: "red"}}>Oops!</span> This page does not exist.</h2>
    </div>
  );
}
