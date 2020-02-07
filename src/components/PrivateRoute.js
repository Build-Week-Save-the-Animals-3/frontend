import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest}) {
    let loggedIn = localStorage.getItem("token");

    return (
        <Route
            {...rest}
            render={props => {
                if(loggedIn) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    )
}

export default PrivateRoute;