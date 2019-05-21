import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  render() {
    return (
      <div class=" col-12">
        <h2 className="col-lg-12 blogTitle">
          {" "}
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
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-envelope text-info" />
                        </div>
                      </div>
                      <input
                        onChange={e =>
                          this.setState({ [e.target.name]: e.target.value })
                        }
                        type="email"
                        class="form-control"
                        id="nombre"
                        name="email"
                        placeholder="example@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div class="text-center">
                    <input
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
