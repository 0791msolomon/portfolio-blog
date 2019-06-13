import React from "react";
import "./index.css";
import author2 from "./photos/author2.png";
import { Name, Message, Email } from "./ContactInputs";
import { toast } from "react-toastify";
const validator = require("email-validator");

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", message: "", email: "", errors: {} };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = e => {
    e.preventDefault();
    let { name, message, email } = this.state;
    if (name.trim() === "") {
      return this.setState({ errors: { name: "Please enter your name" } });
    }
    if (!validator.validate(email) || email.trim() === "") {
      return this.setState({ errors: { email: "Please enter valid email" } });
    }
    if (message.trim() === "") {
      return this.setState({
        errors: { message: "Please enter valid message" }
      });
    }
    toast.info("fake email sent!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
    this.setState({
      name: "",
      email: "",
      message: "",
      errors: {}
    });
  };
  render() {
    return (
      <div className="col-12 blogContainer">
        <div
          className="col-12"
          style={{
            marginBottom: "5%",
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
            backgroundColor: "white"
          }}
        >
          <div
            className="display-4"
            style={{
              alignSelf: "flex-start",
              fontFamily: "Marker Felt, fantasy"
            }}
          >
            Contact Me
          </div>
          <br />
          <img
            className=" img-fluid"
            src={author2}
            alt="the author"
            style={{
              alignSelf: "center",
              // height: "250px",
              // width: "90%",
              borderRadius: "15%"
            }}
          />
          <br />
          <div className="col-12" style={{ alignSelf: "flex-start" }}>
            <h5 style={{ textAlign: "center" }}>
              Email me at example@email.com
            </h5>
          </div>
          <br />
          <div className="col-12" style={{ alignSelf: "flex-start" }}>
            <h6 style={{ textAlign: "center" }}>So what can I do for you?</h6>
          </div>
          <br />
          <br />

          <Name
            onChange={e => this.onChange(e)}
            value={this.state.name}
            errors={this.state.errors}
          />
          <br />
          <Email
            onChange={e => this.onChange(e)}
            value={this.state.email}
            errors={this.state.errors}
          />
          <br />
          <Message
            onChange={e => this.onChange(e)}
            value={this.state.message}
            errors={this.state.errors}
          />
          <br />
          <div className="col-lg-6 col-sm-12" style={{ alignSelf: "center" }}>
            <button
              className="btn btn-info form-control"
              onClick={e => this.submit(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactMe;
