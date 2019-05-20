import React from "react";
import { connect } from "react-redux";
const BlogNavBar = props => {
  const renderBlogs = () => {
    return props.blogs.blogs.map((blog, i) => {
      return (
        <button
          key={i}
          className="form-control col-lg-3 col-md-4 col-sm-12 postBtn"
        >
          {blog.title}
        </button>
      );
    });
  };
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
          Categories &nbsp;&nbsp;
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
          {renderBlogs()}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ blogs }) => {
  return {
    blogs
  };
};
export default connect(mapStateToProps)(BlogNavBar);
