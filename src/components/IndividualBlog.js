import React from "react";
import moment from "moment";
import "./index.css";
const IndividualBlog = props => {
  console.log(props.info);

  return (
    <div
      className="col-12"
      style={{
        minHeight: "250px",
        height: "auto",
        backgroundColor: "white",
        border: "solid 1px lightgray",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <div className="col-lg-3 col-sm-12" style={{ alignSelf: "center" }}>
        <img
          src={props.info.image}
          style={{ height: "150px", width: "100%" }}
          alt="blog info"
        />
      </div>
      <div
        className="col-lg-9 col-sm-12"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly"
        }}
      >
        <h5
          style={{
            alignSelf: "flex-start",
            color: "#94f3ff",
            fontWeight: "bold",
            textShadow: "1px 1px lightgray"
          }}
        >
          {props.info.category ? props.info.category : "Default Category"}
        </h5>
        <h3
          className="individualTitle"
          onClick={() => alert(props.info._id)}
          style={{
            alignSelf: "flex-start",
            textAlign: "left",
            fontFamily: "Optima, sans-serif"
          }}
        >
          {props.info.title}
        </h3>
        <small style={{ textAlign: "left", fontFamily: "Optima, sans-serif" }}>
          {props.info.body.substring(0, 150) + " "}
          <a href="http://www.google.com">
            <b>View Post</b>
          </a>
        </small>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
          }}
        >
          <span className="col-lg-4 col-sm-12">
            <i style={{ alignSelf: "flex-end" }} class="fas fa-user fa-lg" />
            &nbsp; <small style={{ alignSelf: "flex-end" }}>Matt Solomon</small>
          </span>
          <span className="col-lg-4 col-sm-12">
            <i
              style={{ alignSelf: "flex-end" }}
              class="far fa-comments fa-lg"
            />
            &nbsp;
            <small style={{ alignSelf: "flex-end" }}>
              {props.info.replies.length || 0}
            </small>
          </span>
          <span className="col-lg-4 col-sm-12">
            <i
              style={{ alignSelf: "flex-end" }}
              class="far fa-calendar-alt fa-lg"
            />
            &nbsp;
            <small style={{ alignSelf: "flex-end" }}>
              {moment(props.info.time).format("ll")}
            </small>
          </span>
        </div>
      </div>
    </div>
  );
};
export default IndividualBlog;
