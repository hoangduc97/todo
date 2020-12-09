import React from 'react';;
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './configs/history';

import store from './configs/store';
import RootPage from './pages/root.page';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <RootPage />
        </Router>
    </Provider>,
    document.getElementById('root')
);
