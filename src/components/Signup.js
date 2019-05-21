import React from "react";
import SignupInput from "./SignupInput";
import { ToastContainer, toast } from "react-toastify";
var validator = require("email-validator");
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", errors: {} };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = e => {
    e.preventDefault();
    let { email } = this.state;
    if (!validator.validate(email)) {
      return this.setState({ errors: { email: "Enter valid email" } });
    }
    toast.info("You're signed up, but this is fake!", {
      position: "top-right",
      autoClose: 2300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
    this.setState({ errors: {} });
  };
  render() {
    return (
      <div class=" col-12">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <h2 className="col-lg-12 blogTitle">
          <u> Join Must Love Dogs</u>
        </h2>
        <div class="row justify-content-center">
          <div class="col-12 ">
            <form action="mail.php" method="post">
              <div class="card border-primary rounded-0">
                <div class="card-header p-0">
                  <div class="bg-info text-white text-center py-2">
                    <h3>
                      <i class="fa fa-envelope" /> Subscribe to the blog
                    </h3>
                    <p class="m-0">Enter your email</p>
                  </div>
                </div>
                <div class="card-body p-3">
                  <div class="form-group">
                    <SignupInput
                      errors={this.state.errors}
                      value={this.state.email}
                      onChange={e => this.onChange(e)}
                    />
                  </div>

                  <div class="text-center">
                    <input
                      onClick={e => this.submit(e)}
                      type="submit"
                      value="Subscribe"
                      class="btn btn-info btn-block rounded-0 py-2"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
