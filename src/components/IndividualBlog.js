import React from "react";
import moment from "moment";
import "./index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectBlog } from "../actions";
const IndividualBlog = props => {
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
          style={{ height: "150px", borderRadius: "25%", width: "100%" }}
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
        <Link style={{ color: "black" }} to={`/blog/${props.info._id}`}>
          <h3
            onClick={() => props.selectBlog(props.info._id)}
            className="individualTitle"
            style={{
              alignSelf: "flex-start",
              textAlign: "left",
              fontFamily: "Optima, sans-serif"
            }}
          >
            {props.info.title}
          </h3>{" "}
        </Link>
        <small style={{ textAlign: "left", fontFamily: "Optima, sans-serif" }}>
          {props.info.body.substring(0, 150) + " "}
          <Link to={`/blog/${props.info._id}`}>
            <b onClick={() => props.selectBlog(props.info._id)}>View Post</b>
          </Link>
        </small>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
          }}
        >
          <span className="col-lg-3 col-sm-12">
            <i
              style={{ alignSelf: "flex-end" }}
              className="fas fa-user fa-lg"
            />
            &nbsp; <small>Ash Sharp</small>
          </span>
          <span className="col-lg-3 col-sm-12">
            <i className="far fa-comments fa-lg" />
            &nbsp;
            <small style={{ alignSelf: "flex-end" }}>
              {props.info.replies.length || 0}
            </small>
          </span>
          <span className="col-lg-3 col-sm-12">
            <i className="fas fa-thumbs-up" />
            &nbsp;
            <small>{props.info.likes ? props.info.likes : 0}</small>
          </span>
          <span className="col-lg-3 col-sm-12">
            <i
              style={{ alignSelf: "flex-end" }}
              className="far fa-calendar-alt fa-lg"
            />
            &nbsp;
            <small>{moment(props.info.time).format("ll")}</small>
          </span>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = activeBlog => {
  return {
    activeBlog
  };
};
export default connect(
  mapStateToProps,
  { selectBlog }
)(IndividualBlog);
