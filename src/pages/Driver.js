import * as React from 'react';
import DriverForm from "../components/forms/DriverForm"
import TitleCard from "../components/cards/TitleCard";

/* Login as Driver Tab */

const Driver = () => {
    return <React.Fragment>
       <TitleCard title="Signup as Driver"></TitleCard>
      <DriverForm></DriverForm>
    </React.Fragment>;
  };
  
  export default Driver;