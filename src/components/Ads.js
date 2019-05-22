import React from "react";
import weather from "./photos/weather.png";
import menu from "./photos/menu.png";
import higherlower from "./photos/higherlower.png";
import "./index.css";
import portfolio from "./photos/portfolio.png";
const Ads = props => {
  return (
    <div
      className="col-12"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: "3%",
        marginBottom: "3%"
      }}
    >
      <h3 className="col-12" style={{ fontFamily: "   Marker Felt, fantasy" }}>
        Other sample projects
      </h3>
      <div style={{ marginTop: "2%" }} className="col-6  ">
        <a
          href="https://matthew-s-weather.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="adsImg"
            src={weather}
            style={{ height: "150px", width: "100%" }}
            alt=""
          />
        </a>
      </div>
      <div style={{ marginTop: "2%" }} className="col-6  ">
        <a
          href="https://matthew-s-menu.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="adsImg"
            src={menu}
            style={{ height: "150px", width: "100%" }}
            alt=""
          />
        </a>
      </div>
      <div style={{ marginTop: "2%" }} className="col-6  ">
        <a
          href="https://matthew-s-higherlower.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="adsImg"
            src={higherlower}
            style={{ height: "150px", width: "100%" }}
            alt=""
          />
        </a>
      </div>
      <div style={{ marginTop: "2%" }} className="col-6  ">
        <a
          href="https://matthew-s-portfolio-landing.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="adsImg"
            src={portfolio}
            style={{ height: "150px", width: "100%" }}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
export default Ads;
