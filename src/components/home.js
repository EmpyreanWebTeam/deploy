import React from "react";
import ReactDOM from "react-dom";
import { Responsive } from "./react-responsive/Responsive";

// Components
import Slides from './slides'

// Style
import "../App.css";
import "../style/_swiper.scss";
import "../style/_swiperLaptop.scss";
import "../style/_swiperTablet.scss";
import "../style/_swiperMobile.scss";
import "../style/_swiperDesktop.scss";


function Home() {
  return (
    <div className="App">
      <Responsive displayIn={["Laptop"]}>
        <>
          <div className="background">
              <Slides />
          </div>
        </>
      </Responsive>
      <Responsive displayIn={["Mobile"]}>
        <>
          <div className="background">
              <Slides />
          </div>
        </>
      </Responsive>
      <Responsive displayIn={["Tablet"]}>
        <>
          <div className="background">
              <Slides />
          </div>
        </>
      </Responsive>
      <Responsive displayIn={["LargerThanLaptop"]}>
        <>
          <div className="background">
              <Slides />
          </div>
        </>
      </Responsive>
    </div>
  );
}

export default Home;