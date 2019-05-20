import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import axios from "axios";
let baseUrl = process.env.baseUrl || "http://localhost:5000/api/blog/";
class ReadBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderBlog = () => {
    console.log(this.props.activeBlog);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          backgroundColor: "white"
        }}
      >
        <div
          class="jumbotron jumbotron-fluid"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            border: "solid 1px lightgray",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            margin: "0%"
          }}
        >
          <h1 class="display-4" style={{ fontFamily: "Optima, sans-serif" }}>
            {this.props.activeBlog.title}
          </h1>
          <div
            className="col-lg-4 col-sm-12"
            style={{
              marginTop: "3%",
              alignSelf: "center",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <span className="col-lg-4 col-sm-12">
              <i class="fas fa-user fa-lg" />

              <small>Matt Solomon</small>
            </span>
            <span className="col-lg-4 col-sm-12">
              <i class="far fa-comments fa-lg" />
              <small>
                {this.props.activeBlog.replies
                  ? this.props.activeBlog.replies.length
                  : 0}
              </small>
            </span>
            <span className="col-lg-4 col-sm-12">
              <i
                style={{ alignSelf: "flex-end" }}
                class="far fa-calendar-alt fa-lg"
              />
              <small style={{ alignSelf: "flex-end" }}>
                {moment(this.props.activeBlog.time).format("l")}
              </small>
            </span>
          </div>
        </div>

        <img
          className="col-lg-6 col-sm-12"
          src={this.props.activeBlog.image}
          style={{
            paddingTop: "3%",
            height: "250px",
            width: "100%",
            alignSelf: "center"
          }}
        />
        <div
          className="col-12"
          style={{
            paddingTop: "3%",
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <small style={{ textAlign: "left" }}>
            {this.props.activeBlog.body}
          </small>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div
        className=" col-12 blogContainer"
        style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
      >
        {this.renderBlog()}
      </div>
    );
  }
}
const mapStateToProps = ({ activeBlog }) => {
  return { activeBlog };
};
export default connect(mapStateToProps)(ReadBlog);
