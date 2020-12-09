import { connect } from 'react-redux';
import { login } from '../auth.action';
import Signin from './signin.page';

const mapStateToProps = ({ AuthReducer }) => {
    return {
        loading: AuthReducer.loading,
        err: AuthReducer.err,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
