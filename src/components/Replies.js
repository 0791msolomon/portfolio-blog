import React from "react";
import moment from "moment";
const Replies = props => {
  let color = "lightgray";
  if (props.count % 2 === 0) {
    color = "#94f3ff";
  }
  return (
    <div
      className="col-12"
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: `solid 3px ${color}`,
        marginTop: "3%",
        paddingTop: "3%",
        paddingBottom: "3%"
      }}
    >
      {/* <div className="col-12" style={{display: 'flex', flexDirection: 'row'}}></div> */}
      <h6 style={{ textAlign: "left" }}>
        <i className="far fa-user fa-lg" />{" "}
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
