import React from "react";

import classnames from "classnames";

export const TextArea = props => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control rounded-0", {
          "is-invalid": props.errors.reply
        })}
        id="exampleFormControlTextarea1"
        rows="10"
        name="reply"
        value={props.value}
        onChange={props.onChange}
      />
      {props.errors.reply && (
        <div className="invalid-feedback" style={{ fontWeight: "bold" }}>
          {props.errors.reply}
        </div>
      )}
    </div>
  );
};

export const NameInput = props => {
  return (
    <div className="form-group">
      <input
        type="text"
        className={classnames("form-control ", {
          "is-invalid": props.errors.name
        })}
        name="name"
        value={props.value}
        onChange={props.onChange}
      />
      {props.errors.name && (
        <div className="invalid-feedback" style={{ fontWeight: "bold" }}>
          {props.errors.name}
        </div>
      )}
    </div>
  );
};
