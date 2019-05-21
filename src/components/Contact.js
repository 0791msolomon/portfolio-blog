import React from "react";
import "./index.css";
const Contact = props => {
  return (
    <div
      className="col-12"
      style={{ display: "flex", flexDirection: "column", marginTop: "10%" }}
    >
      <h3 className="col-12" style={{ fontFamily: "   Marker Felt, fantasy" }}>
        View Profiles
      </h3>
      <div className="col-12" style={{ display: "flex", flexDirection: "row" }}>
        <div className="col-4">
          <a
            href="https://www.facebook.com/mateo.solomon.16"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              id="social-fb"
              className="fab fa-facebook-square fa-4x iconHover"
            />
          </a>
        </div>
        <div className="col-4">
          <a
            href="https://www.linkedin.com/in/matthew-solomon-a14683140/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              id="social-gp"
              className="fab fa-linkedin-square fa-4x iconHover"
            />
          </a>
        </div>
        <div className="col-4">
          <a
            href="https://github.com/0791msolomon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              id="social-em"
              className="fab fa-github-square fa-4x iconHover"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
