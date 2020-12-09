import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ isAuthUser, type, component, ...rest }) => {
    if (type === 'guest' && isAuthUser)
        return <Redirect to={{ pathname: '/', state: rest.location }} />;
    else if (type === 'private' && !isAuthUser)
        return <Redirect to={{ pathname: '/signin', state: rest.location }} />;

    return <Route {...rest} render={(props) => <component {...props} />} />;
};

const mapStateToProps = ({ AuthReducer }) => ({
    isAuthUser: AuthReducer.isAuthUser,
});

export default connect(mapStateToProps)(AuthRoute);
