import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ResponsiveFooter from "./components/ResponsiveFooter";
import DriverInfo from "./components/DriverInfo";
import Loading from "react-simple-loading";

const Home = React.lazy(() => import("./pages/Home.js"));
const View = React.lazy(() => import("./pages/View.js"));
const Edit = React.lazy(() => import("./pages/Edit.js"));
const Login = React.lazy(() => import("./pages/Login.js"));
const Driver = React.lazy(() => import("./pages/Driver.js"));
const Rider = React.lazy(() => import("./pages/Rider.js"));
const Error = React.lazy(() => import("./pages/Error.js"));
const Nonexistent = React.lazy(() => import("./pages/Nonexistent.js"));

function App() {

  return (
    <React.Fragment>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route> {/* navigates to home */}
          <Route path="home" element={<Home />}></Route> {/* navigates to home */}
          <Route path="view" element={<View />}></Route> {/* navigates to view all signups */}
          <Route path="edit" element={<Edit />}></Route> {/* navigates to edit signup page */}
          <Route path="login" element={<Login />}></Route> {/* navigates to log in page for drivers */}
          <Route path="welcome/:id" element={<DriverInfo/>}></Route> {/* navigates to driver page when logged in */}
          <Route path="driver" element={<Driver />}></Route> {/* navigates to driver sign up page */}
          <Route path="rider/*" element={<Rider />}></Route> {/* navigates to rider sign up page */}
          <Route path="error" element={<Error />}></Route> {/* navigates to error page when signing up */}
          <Route path="*" element={<Nonexistent />}></Route> {/* navigates to nonexistent page */}
        </Routes>
      </Suspense>
      <ResponsiveFooter></ResponsiveFooter>
    </React.Fragment>
  );
}

export default App;
