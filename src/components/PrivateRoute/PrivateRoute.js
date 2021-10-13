import React from "react";
import useAuth from "../hooks/useAuth";
import {Route, Redirect} from "react-router-dom"

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  //console.log(rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{ pathName: "/login", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
