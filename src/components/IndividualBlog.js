import React from "react";
import moment from "moment";
import "./index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectBlog } from "../actions";
import smallAuthor from "./photos/smallAuthor.png";
const IndividualBlog = props => {
  return (
    <div
      className="col-12"
      style={{
        paddingTop: "2%",
        paddingBottom: "2%",
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
          className="img-fluid"
          src={props.info.image}
          style={{ borderRadius: "25%" }}
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
            color: "#17a2b8",
            fontWeight: "bold",
            textShadow: "1px 1px lightgray"
          }}
        >
          &nbsp;
          <small>{moment(props.info.time).format("ll")}</small>
          {/* {props.info.category ? props.info.category : "Default Category"} */}
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
            justifyContent: "space-evenly"
          }}
        >
          <span className="col-lg-3 col-sm-12">
            <img
              className="img-fluid"
              src={smallAuthor}
              alt="ashley sharp"
              style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            />
            <small>
              <b> Ashley</b>
            </small>
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
          {/* <span className="col-lg-3 col-sm-12">
            <i
              style={{ alignSelf: "flex-end" }}
              className="far fa-calendar-alt fa-lg"
            />
            &nbsp;
            <small>{moment(props.info.time).format("ll")}</small>
          </span> */}
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
