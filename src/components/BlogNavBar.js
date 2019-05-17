import React from "react";

const BlogNavBar = props => {
  return (
    <div>
      <p style={{ marginBottom: "0%", paddingBottom: "0%" }}>
        <a
          className="btn btn-secondary form-control"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "right",
            marginBottom: "0%"
          }}
        >
          Latest Posts &nbsp;&nbsp;
          <i className="fas fa-bars" />
        </a>
      </p>
      <div
        className="collapse"
        id="collapseExample"
        style={{ marginTop: "0%", paddingTop: "0%" }}
      >
        <div
          className="card card-body col-12"
          style={{
            marginTop: "0%",
            padding: "0%",
            backgroundColor: "#a0a6af",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <button className="form-control col-lg-3 col-md-4 col-sm-12 postBtn">
            example
          </button>
          <button className="form-control col-lg-3 col-md-4 col-sm-12 postBtn">
            example
          </button>
          <button className="form-control col-lg-3 col-md-4 col-sm-12 postBtn">
            example
          </button>
          <button className="form-control col-lg-3 col-md-4 col-sm-12 postBtn">
            example
          </button>
        </div>
      </div>
    </div>
  );
};
export default BlogNavBar;
