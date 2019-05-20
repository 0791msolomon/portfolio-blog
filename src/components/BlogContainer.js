import React from "react";
import BlogNavBar from "./BlogNavBar";
import { connect } from "react-redux";
import { clearBlog } from "../actions";
import IndividualBlog from "./IndividualBlog";
import "./index.css";
class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.clearBlog();
  };
  renderBlogs = () => {
    return this.props.blogs.blogs.map((item, i) => {
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
        <BlogNavBar />
        {this.props.blogs.blogs.length > 0 ? this.renderBlogs() : null}
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
