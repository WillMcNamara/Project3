import React from "react";
import "./style.css";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, classes, children }) {
  return <div className={`container${fluid ? "-fluid" : ""} ${classes ? classes : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ classes, children }) {
  return <div className={`row ${classes ? classes : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, classes, children }) {
  return (
    <div
      className={`col-${size} ${classes ? classes : ""}`}
    >
      {children}
    </div>
  );
}