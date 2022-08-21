import React, { useState, useEffect } from "react";
import CardGrid from "../components/grids/CardGrid";
import TitleCard from "../components/cards/TitleCard";

/*
  View Tab
*/
const View = () => {
  const [drivers, setDrivers] = useState([]); // stores all drivers
  const [riders, setRiders] = useState([]); // stores all riders

  useEffect(() => { // called when page is loaded up
    fetchList();
  },[]);



  async function fetchList() { // makes api call to collect driver and rider lists

      let response = await fetch("https://whispering-eyrie-86232.herokuapp.com/drivers", {
        mode: "cors",
      });
      let data = await response.json();
      setDrivers(data); // sets drivers to the data collected from api

      response = await fetch("https://whispering-eyrie-86232.herokuapp.com/riders", {
        mode: "cors",
      });
      data = await response.json();
      setRiders(data); // sets riders to the data collected from api
      }

  return <React.Fragment>
     <TitleCard title="View Current Signups"></TitleCard>
     <CardGrid 
  items={drivers}
  riders={riders}/>
    </React.Fragment>;
};

export default View;
