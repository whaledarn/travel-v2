import React, { useState, useEffect } from "react";
import CardGrid from "../components/CardGrid";
import TitleCard from "../components/TitleCard";


const View = () => {
  const [drivers, setDrivers] = useState([]);
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    fetchList();
  },[]);



  async function fetchList() {

      let response = await fetch("https://whispering-eyrie-86232.herokuapp.com/drivers", {
        mode: "cors",
      });
      let data = await response.json();
      setDrivers(data);

      response = await fetch("https://whispering-eyrie-86232.herokuapp.com/riders", {
        mode: "cors",
      });
      data = await response.json();
      setRiders(data);
      }

  return <React.Fragment>
     <TitleCard title="View Current Signups"></TitleCard>
     <CardGrid 
  items={drivers}
  riders={riders}/>
    </React.Fragment>;
};

export default View;
