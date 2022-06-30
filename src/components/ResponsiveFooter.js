import * as React from "react";

import classes from "./ResponsiveFooter.module.css";


export default function ResponsiveFooter() {
  return (
    <footer className={classes.footer}>
        <hr className={classes.divider}></hr>
    <p className={classes.text}>Developed for Texas Epic</p>  

  </footer>
  );
}
