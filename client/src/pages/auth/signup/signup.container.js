import { connect } from 'react-redux';
import { register } from '../auth.action';
import Signup from './signup.page';

const mapStateToProps = ({ AuthReducer }) => {
    return {
        loading: AuthReducer.loading,
        err: AuthReducer.err,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => {
            dispatch(register(user));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
