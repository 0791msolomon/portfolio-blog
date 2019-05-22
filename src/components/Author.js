import React from "react";
import "./index.css";
import author from "./photos/author.png";
import { Link } from "react-router-dom";
const Author = props => {
  return (
    <div
      className=" col-12"
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "flex-start",
      //   alignContent: "flex-start",
      //   alignItems: "flex-start"
      // }}
    >
      <h2 className="col-lg-12 author">Meet the Author</h2>
      <div className="col-12">
        <img
          style={{ height: "350px", width: "100%", borderRadius: "15%" }}
          src={author}
          alt="the author"
        />
        <small style={{ float: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </small>
        <Link to="/about">Read More</Link>
      </div>
    </div>
  );
};
export default Author;
