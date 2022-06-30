import * as React from "react";
import classes from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={classes.fof}>
      <h1>Error 404</h1>
      <h2><span style={{color: "red"}}>Oops!</span> It looks like the ID you entered is in use already.</h2>
      <h3>If you are looking to change your sign up, head over to edit and delete your signup first. Otherwise, try a different ID.</h3>
    </div>
  );
}
