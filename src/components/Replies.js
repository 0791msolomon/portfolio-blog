import React from "react";
import moment from "moment";
const Replies = props => {
  console.log(props.reply);
  return (
    <div
      className="col-12"
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "solid 1px lightgray",
        marginTop: "3%",
        paddingTop: "3%",
        paddingBottom: "3%"
      }}
    >
      <h6 style={{ textAlign: "left" }}>
        <span style={{ color: "red", fontWeight: "bold" }}>
          {props.reply.name.toUpperCase()}
        </span>{" "}
        says:
      </h6>
      <p style={{ textAlign: "left" }}>{props.reply.comment}</p>
      <small style={{ textAlign: "left" }}>
        -{moment(props.reply.time).format("ll")}
      </small>
    </div>
  );
};
export default Replies;
