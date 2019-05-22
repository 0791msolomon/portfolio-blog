import React from "react";
import classnames from "classnames";

export const Name = props => {
  return (
    <div className="col-lg-6 col-sm-12">
      <small style={{ float: "left" }}>Your Name *</small>
      <input
        className={classnames("form-control", {
          "is-invalid": props.errors.name
        })}
        type="text"
        name="name"
        value={props.value}
        onChange={e => props.onChange(e)}
      />
      {props.errors.name && (
        <div className="invalid-feedback" style={{ fontWeight: "bold" }}>
          {props.errors.name}
        </div>
      )}
    </div>
  );
};

export const Email = props => {
  return (
    <div className="col-lg-6 col-sm-12">
      <small style={{ float: "left" }}>Email *</small>
      <input
        className={classnames("form-control", {
          "is-invalid": props.errors.email
        })}
        type="text"
        name="email"
        value={props.value}
        onChange={props.onChange}
      />
      {props.errors.email && (
        <div className="invalid-feedback" style={{ fontWeight: "bold" }}>
          {props.errors.email}
        </div>
      )}
    </div>
  );
};

export const Message = props => {
  return (
    <div className="col-lg-6 col-sm-12">
      <small style={{ float: "left" }}>Message *</small>
      <textarea
        className={classnames("form-control", {
          "is-invalid": props.errors.message
        })}
        rows="10"
        name="message"
        value={props.value}
        onChange={props.onChange}
      />
      {props.errors.message && (
        <div className="invalid-feedback" style={{ fontWeight: "bold" }}>
          {props.errors.message}
        </div>
      )}
    </div>
  );
};

//   export const TextArea = props => {
//     return (
//       <div className="form-group">
//         <textarea
//           className={classnames("form-control rounded-0", {
//             "is-invalid": props.errors.reply
//           })}
//           id="exampleFormControlTextarea1"
//           rows="10"
//           name="reply"
//           value={props.value}
//           onChange={props.onChange}
//         />
// {props.errors.reply && (
//   <div className="invalid-feedback" style={{ fontWeight: "bold" }}>
//     {props.errors.reply}
//   </div>
// )}
//       </div>
//     );
//   };
