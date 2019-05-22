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
    this.state = { blogs: [] };
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
  render() {
    return (
      <div
        className=" col-12 blogContainer"
        style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
      >
        <BlogNavBar blogs={this.state.blogs} />
        {this.state.blogs.length > 0 ? this.renderBlogs() : null}
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
