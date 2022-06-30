import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ResponsiveFooter from "./components/ResponsiveFooter";
import Loading from "react-simple-loading";

const Home = React.lazy(() => import("./pages/Home.js"));
const View = React.lazy(() => import("./pages/View.js"));
const Edit = React.lazy(() => import("./pages/Edit.js"));
const Login = React.lazy(() => import("./pages/Login.js"));
const Driver = React.lazy(() => import("./pages/Driver.js"));
const Rider = React.lazy(() => import("./pages/Rider.js"));
const Error = React.lazy(() => import("./pages/Error.js"));

function App() {

  return (
    <React.Fragment>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="view" element={<View />}></Route>
          <Route path="edit" element={<Edit />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="driver" element={<Driver />}></Route>
          <Route path="rider/*" element={<Rider />}></Route>
          <Route path="error" element={<Error />}></Route>
        </Routes>
      </Suspense>
      <ResponsiveFooter></ResponsiveFooter>
    </React.Fragment>
  );
}

export default App;
