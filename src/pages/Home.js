import * as React from "react";
import TitleCard from "../components/cards/TitleCard";
import InfoCard from "../components/cards/InfoCard";

/* Info Page Tab/ Home Tab */

const Home = () => {
  return (
    <React.Fragment>
      <TitleCard title="Home Page"></TitleCard>
      <InfoCard title="Getting Started" content="This site serves as a replacement for the Excel sheet used by UT Epic for church rides. Not affiliated with official Epic Movement."></InfoCard>
      <InfoCard title="Signing Up" content="Head over to the signup tab on the top right to get started. Fill out the form as either a rider or driver, ensuring the contact information is accurate. You will receive a text message confirming your signup after you submit. Sign ups will close for drivers at 10PM on Friday and 10PM on Saturday for riders. Please note: You don't have to enter your UTEID if you don't want, but you should enter unique text, because you will be able to use this entry to remove your signup."></InfoCard>
      <InfoCard title="Removing Your Signup" content="Head over to the edit tab to get started. Enter your UTEID or whatever you entered in that field. If you are successfully removed, you should be redirected to this page. Otherwise, check to make sure you filled out the UTEID field properly."></InfoCard>
      <InfoCard title="Viewing Your Riders as a Driver" content="If you are a driver, head over to the Driver tab to view your riders and their contact information. You can also generate the Google Maps route to all your riders."></InfoCard>

    </React.Fragment>
  );
};

export default Home;
