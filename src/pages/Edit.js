import * as React from 'react';
import RemoveForm from "../components/forms/RemoveForm"
import TitleCard from "../components/cards/TitleCard";

/* Edit Signup Tab */

const Edit = () => {
    return <React.Fragment>
       <TitleCard title="Edit Your Signup"></TitleCard>
      <RemoveForm></RemoveForm>
    </React.Fragment>;
  };
  
  export default Edit;