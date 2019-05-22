import React from "react";

import classnames from "classnames";

export default function SignupInput(props) {
  return (
    <div className="input-group mb-2">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <i className="fa fa-envelope text-info" />
        </div>
      </div>
      <input
        // onChange={e => this.setState({ [e.target.name]: e.target.value })}
        onChange={e => props.onChange(e)}
        value={props.value}
        type="email"
        className={classnames("form-control", {
          "is-invalid": props.errors.email
        })}
        name="email"
        placeholder="example@gmail.com"
      />
      {props.errors.email ? (
        <div className="invalid-feedback" style={{ fontWeight: "bold" }}>
          {props.errors.email}
        </div>
      ) : null}
    </div>
  );
}
