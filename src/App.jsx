// import { Fragment } from "react";

//default import
import NetflixSeries from "./components/NetflixSeries";

// named imports
import { Header, Footer } from "./components/NetflixSeries";

import DynamicNetflixSeries from "./components/DynamicNetflixSeries";
import { Profile } from "./components/Profile";

import "./components/Netflix.css";

export const App = () => {
  //--------COMPONENTS EXAMPLE---------->
  // return (
  //   <div>
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //   </div>

  //-------Fragments Example------->
  // return (
  //   <React.Fragment>
  //     <NetflixSeries />
  //      <NetflixSeries />
  //      <NetflixSeries />
  //      <NetflixSeries />
  //      <NetflixSeries />
  //   </React.Fragment>
  // );

  // We can use only <Fragment></Fragment> also. For more simplicity, we can even use <></>
  return (
    <>
      <Header />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer />
    </>
  );
};

export const DynamicList = () => {
  return (
    <section className="container">
      {/* <Header/> */}
      <h1 className="cardHeading">List of Best Netflix Series</h1>
      <DynamicNetflixSeries />
      {/* <Footer/> */}
    </section>
  );
};

export const MyProfile = () => {
  return (
    <>
      <Profile />
    </>
  );
};
