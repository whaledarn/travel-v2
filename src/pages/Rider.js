import * as React from "react";
import RiderForm from "../components/forms/RiderForm";
import TitleCard from "../components/cards/TitleCard";

/* Sign up As Rider Tab */

const Rider = () => {
  return (
    <React.Fragment>
       <TitleCard title="Signup as Rider"></TitleCard>
     <RiderForm></RiderForm>

    </React.Fragment>
  );
};

export default Rider;
