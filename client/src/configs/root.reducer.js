import { combineReducers } from 'redux';
import HomeReducer from '../pages/home/home.reducer';
import AuthReducer from '../pages/auth/auth.reducer';
import ListDetailReducer from '../pages/listdetail/listdetail.reducer';

export default combineReducers({
    HomeReducer,
    AuthReducer,
    ListDetailReducer,
});
