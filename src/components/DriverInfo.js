import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DriverInfoGrid from "./grids/DriverInfoGrid.js";
import TitleCard from "./cards/TitleCard.js";

/* Page when logged in as driver */

export default function DriverInfo(props) {
  const params = useParams();
  const [driver, setDriver] = useState([]); // stores all drivers
  const [riders, setRiders] = useState([]); // stores all riders


  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList() {
    let response = await fetch("https://whispering-eyrie-86232.herokuapp.com/drivers/"+params.id, {
      mode: "cors",
    });
    let data = await response.json();
    setDriver(data); // sets drivers to the data collected from api

    response = await fetch("https://whispering-eyrie-86232.herokuapp.com/riders", {
      mode: "cors",
    });
    data = await response.json();
    setRiders(data); // sets riders to the data collected from api
  }

  return (
    <React.Fragment>
      <TitleCard title={driver.firstName===undefined?"" : "Welcome "+  driver.firstName+" " +driver.lastName+"!"}></TitleCard>
      <DriverInfoGrid driver={driver} riders={riders}></DriverInfoGrid>
    </React.Fragment>
  );
}
