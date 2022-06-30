import React, { useState } from "react";
import {TextField, Button, MenuItem} from "@mui/material";
import {useNavigate} from 'react-router-dom';



import classes from "./Form.module.css";

const Form = () => {
  // create state variables for each input
  const [id, setID] = useState("");
  const [type, setType] = useState(0);
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, reason);
    if(type === 0){
      fetch('https://whispering-eyrie-86232.herokuapp.com/riders/'+id, { method: 'DELETE' })
    }
    else if(type === 1){
      fetch('https://whispering-eyrie-86232.herokuapp.com/drivers/'+id, { method: 'DELETE' })
    }

    navigate('/home');

    
  };

  return (
    <div className={classes.root}>
      <h4>Edit your signup</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            className={classes.form}
            label="ID"
            variant="filled"
            required
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className={classes.form}
            select
            label="Type"
            required
            value={type}
            variant="filled"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem key={0} value={0}>
              Rider
            </MenuItem>
            <MenuItem key={1} value={1}>
              Driver
            </MenuItem>
          </TextField>
        </div>
        <div>
          <TextField
            className={classes.form}
            label="Reason"
            variant="filled"
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <div className={classes.but}>
          <Button type="submit" variant="contained" color="primary">
            Remove
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
