import React from "react";

const IndividualBlog = props => {
  return (
    <div
      className="col-12"
      style={{
        minHeight: "250px",
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
      <div className="col-lg-3 col-sm-12">ace</div>
      <div className="col-lg-3 col-sm-12">ace</div>
      <div className="col-lg-3 col-sm-12">ace</div>
    </div>
  );
};
export default IndividualBlog;
