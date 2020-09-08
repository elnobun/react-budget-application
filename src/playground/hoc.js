import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is a private info! Please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Login to see the info</p>
      )}
    </div>
  );
};
// msg: please login to see the info

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the info" />,
  document.getElementById("root")
);
// ReactDOM.render(
//   <AdminInfo info="These are the info" />,
//   document.getElementById("root")
// );
