import * as React from "react";
import RiderForm from "../components/RiderForm";
import TitleCard from "../components/TitleCard";



const Rider = () => {
  return (
    <React.Fragment>
       <TitleCard title="Signup as Rider"></TitleCard>
     <RiderForm></RiderForm>

    </React.Fragment>
  );
};

export default Rider;
