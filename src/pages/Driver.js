import * as React from 'react';
import DriverForm from "../components/DriverForm"
import TitleCard from "../components/TitleCard";


const Driver = () => {
    return <React.Fragment>
       <TitleCard title="Signup as Driver"></TitleCard>
      <DriverForm></DriverForm>
    </React.Fragment>;
  };
  
  export default Driver;