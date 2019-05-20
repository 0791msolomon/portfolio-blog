import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { addComment, addLike } from "../Services/BlogServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class ReadBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reply: "", name: "" };
  }

  createComment = async e => {
    e.preventDefault();

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
              className="col-lg-4 col-sm-12"
              style={{
                display: "flex",
                marginTop: "1%",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <i style={{ alignSelf: "center" }} class="fas fa-user fa-lg" />

              <small>Matt Solomon</small>
            </span>
            <span
              className="col-lg-4 col-sm-12"
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
              className="col-lg-4 col-sm-12"
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
          {/* <div
            className="col-12  "
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "2%",
              marginBottom: "2%"
            }}
          /> */}

          <div class="form-group col-12" style={{ marginTop: "3%" }}>
            <h3 style={{ textAlign: "left", fontFamily: "Optima, sans-serif" }}>
              Leave a Reply
            </h3>
            <label style={{ float: "left", fontFamily: "Optima, sans-serif" }}>
              Your name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={e => this.onChange(e)}
            />
            <label style={{ float: "left", fontFamily: "Optima, sans-serif" }}>
              Comment
            </label>
            <textarea
              class="form-control rounded-0"
              id="exampleFormControlTextarea1"
              rows="10"
              name="reply"
              value={this.state.reply}
              onChange={e => this.onChange(e)}
            />
            <button
              style={{
                alignSelf: "flex-end"
              }}
              className="btn btn-info form-control"
              onClick={e => this.createComment(e)}
            >
              Submit
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
const mapStateToProps = ({ activeBlog }) => {
  return { activeBlog };
};
export default connect(mapStateToProps)(ReadBlog);
