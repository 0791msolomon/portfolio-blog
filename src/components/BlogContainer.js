import React from "react";
import BlogNavBar from "./BlogNavBar";
import { connect } from "react-redux";
import { clearBlog } from "../actions";
import axios from "axios";
import IndividualBlog from "./IndividualBlog";
import "./index.css";
const baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:5000";
class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [], display: "mostRecent" };
  }
  componentDidMount = async () => {
    let arr = [];
    this.props.clearBlog();
    try {
      let response = await axios.get(`${baseUrl}/api/blog`);
      response.data.map(item => {
        return arr.push(item);
      });
      arr.sort((a, b) => b.time - a.time);
      this.setState({ blogs: arr });
    } catch (err) {
      console.log(err);
    }
  };
  renderBlogs = () => {
    return this.state.blogs.map((item, i) => {
      return (
        <div key={i}>
          <IndividualBlog info={item} index={i} />
        </div>
      );
    });
  };
  displayOrder = order => {
    let arr = this.state.blogs;
    if (order === "Oldest") {
      arr.sort((a, b) => a.time - b.time);
      return this.setState({ blogs: arr });
    }
    if (order === "Most Recent") {
      arr.sort((a, b) => b.time - a.time);
      return this.setState({ blogs: arr });
    }
    if (order === "Most Likes") {
      arr.sort((a, b) => b.likes - a.likes);
      return this.setState({ blogs: arr });
    }
    if (order === "Most Replies") {
      arr.sort((a, b) => b.replies.length - a.replies.length);
      return this.setState({ blogs: arr });
    }
  };

  showSpinner = () => {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          height: "200px",
          display: "flex",
          backgroundColor: "white",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>{" "}
        <h3>Loading Blogs...</h3>
      </div>
    );
  };
  render() {
    return (
      <div
        className=" col-12 blogContainer"
        style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
      >
        <BlogNavBar
          blogs={this.state.blogs}
          display={order => this.displayOrder(order)}
        />
        {this.state.blogs.length > 0 ? this.renderBlogs() : this.showSpinner()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    blogs: state.blogs
  };
};
export default connect(
  mapStateToProps,
  { clearBlog }
)(BlogContainer);
