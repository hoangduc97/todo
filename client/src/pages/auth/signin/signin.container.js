import { connect } from 'react-redux';
import { login } from '../auth.action';
import Signin from './signin.page';

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(login(user));
        },
    };
};

export default connect(null, mapDispatchToProps)(Signin);
