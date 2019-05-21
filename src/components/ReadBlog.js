import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { addComment, addLike } from "../Services/BlogServices";
import { likePost } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import { TextArea, NameInput } from "./BlogInputs";
import Replies from "./Replies";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
class ReadBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reply: "", name: "", errors: {} };
  }

  likePost = async e => {
    e.preventDefault();
    if (this.props.likes.includes(this.props.activeBlog._id)) {
      return toast.error("You already liked this post", {
        position: "top-right",
        autoClose: 2300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    } else {
      await this.props.likePost(this.props.activeBlog._id);
      await addLike(this.props.activeBlog._id);
      return toast.info("You liked this post!", {
        position: "top-right",
        autoClose: 2300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };
  createComment = async e => {
    e.preventDefault();
    let { name, reply } = this.state;
    if (name.trim().length === 0) {
      this.setState({ errors: { name: "You must enter a value" } });
      return;
    }
    if (reply.trim().length === 0 || reply.trim().length < 10) {
      this.setState({
        errors: { reply: "Reply must be at least 10 characters" }
      });
      return;
    }
    addComment({
      name: this.state.name,
      reply: this.state.reply,
      id: this.props.activeBlog._id
    })
      .then(async res => {
        await this.setState({ reply: "", name: "" });
        toast.info("Your comment was added!", {
          position: "top-right",
          autoClose: 2300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      })
      .catch(async err => {
        console.log(err);
        toast.error("Error posting comment", {
          position: "top-right",
          autoClose: 2300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      });
    this.setState({ errors: {} });
  };
  renderReplies = () => {
    let replies = [];
    if (
      this.props.activeBlog.replies &&
      this.props.activeBlog.replies.length > 0
    ) {
      replies = this.props.activeBlog.replies;
    }
    return replies.map((item, i) => {
      return (
        <div key={i}>
          <Replies reply={item} />
        </div>
      );
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  renderBlog = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          backgroundColor: "white"
        }}
      >
        <ToastContainer
          position="top-right"
          autoClose={1900}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <div
          class="col-12 jumbotron jumbotron-fluid"
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
          <div className="col-12">
            <h1 class="display-4" style={{ fontFamily: "Optima, sans-serif" }}>
              {this.props.activeBlog.title}
            </h1>
          </div>
          <div
            className="col-lg-6 col-sm-12"
            style={{
              marginTop: "3%",
              alignSelf: "center",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <span
              className="col-lg-2 col-sm-12"
              style={{
                display: "flex",
                marginTop: "1%",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <i style={{ alignSelf: "center" }} class="fas fa-user fa-lg" />

              <small>Ashley Sharp</small>
            </span>
            <span
              className="col-lg-2 col-sm-12"
              style={{
                display: "flex",
                marginTop: "1%",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <i
                style={{ alignSelf: "center" }}
                class="far fa-comments fa-lg"
              />
              <small>
                {this.props.activeBlog.replies
                  ? this.props.activeBlog.replies.length
                  : 0}
              </small>
            </span>
            <span
              className="col-lg-2 col-sm-12"
              style={{
                display: "flex",
                marginTop: "1%",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <i style={{ alignSelf: "center" }} class="fas fa-thumbs-up" />
              <small>
                {this.props.activeBlog.likes ? this.props.activeBlog.likes : 0}
              </small>
            </span>

            <span
              className="col-lg-2 col-sm-12"
              style={{
                display: "flex",
                marginTop: "1%",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <i
                style={{ alignSelf: "center" }}
                class="far fa-calendar-alt fa-lg"
              />
              <small>{moment(this.props.activeBlog.time).format("l")}</small>
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
          <button
            className="form-control  btn btn-info"
            onClick={e => this.likePost(e)}
          >
            Leave a like <i class="fas fa-thumbs-up" />
          </button>
          <div class=" col-12" style={{ marginTop: "3%" }}>
            <div className="col-12 repliesDiv">
              {this.props.activeBlog.replies &&
              this.props.activeBlog.replies.length > 1
                ? `${this.props.activeBlog.replies.length} Responses to ${
                    this.props.activeBlog.title
                  }`
                : this.props.activeBlog.replies &&
                  this.props.activeBlog.replies.length === 1
                ? `${this.props.activeBlog.replies.length} Response to ${
                    this.props.activeBlog.title
                  }`
                : `0 Responses to ${this.props.activeBlog.title}`}
            </div>
            <div className="repliesDiv2" />
            {this.renderReplies()}
          </div>

          <div class="form-group col-12" style={{ marginTop: "3%" }}>
            <h3 style={{ textAlign: "left", fontFamily: "Optima, sans-serif" }}>
              Leave a Reply
            </h3>
            <label style={{ float: "left", fontFamily: "Optima, sans-serif" }}>
              Your name
            </label>

            <NameInput
              onChange={e => this.onChange(e)}
              value={this.state.name}
              errors={this.state.errors}
            />
            <label style={{ float: "left", fontFamily: "Optima, sans-serif" }}>
              Comment
            </label>

            <TextArea
              onChange={e => this.onChange(e)}
              value={this.state.reply}
              errors={this.state.errors}
            />
            <button
              style={{
                alignSelf: "flex-end"
              }}
              className="btn btn-info form-control"
              onClick={e => this.createComment(e)}
            >
              Leave comment <i class="fas fa-comment" />
            </button>
          </div>
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
const mapStateToProps = ({ activeBlog, likes }) => {
  return { activeBlog, likes };
};
export default connect(
  mapStateToProps,
  { likePost }
)(ReadBlog);
