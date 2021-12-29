import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PublicRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
       (
        <Component {...props} />
      )
    }
  />
);

PublicRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PublicRoute);