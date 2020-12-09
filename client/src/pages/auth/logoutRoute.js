import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from './auth.action';

const LogoutRoute = (props) => {
    useEffect(() => {
        props.logout();
    });
    return <Redirect to="/signin" />;
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(LogoutRoute);
