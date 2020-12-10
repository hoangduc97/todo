import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Loading from '../components/loading/loading.component';
import AuthRoute from './authRoute';
import LogoutRoute from './auth/logoutRoute';
import NotFound from './notfound/notfound.page';
const TIMEOUT = 1000;

const fakeDelay = (ms) => (promise) =>
    promise.then(
        (data) =>
            new Promise((resolve) => {
                setTimeout(() => resolve(data), ms);
            })
    );

const routes = [
    {
        path: '/',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./home/home.page'))
        ),
        type: 'private',
    },
    {
        path: '/lists',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./home/home.page'))
        ),
        type: 'private',
    },
    {
        path: '/lists/:list_id',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./listdetail/listdetail.page'))
        ),
        type: 'private',
    },
    {
        path: '/schedule',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./schedule/schedule.page'))
        ),
        type: 'private',
    },
    {
        path: '/today',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./schedule/schedule.page'))
        ),
        type: 'private',
    },
    {
        path: '/signin',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./auth/signin/signin.container'))
        ),
        type: 'guest',
    },
    {
        path: '/signup',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./auth/signup/signup.container'))
        ),
        type: 'guest',
    },
];

const Routes = (props) => {
    return (
        <Suspense fallback={<Loading />}>
            <TransitionGroup>
                <Switch>
                    {routes.map(({ type, path, Component }) => (
                        <AuthRoute type={type} key={path} exact path={path}>
                            {({ match }) => {
                                return (
                                    <CSSTransition
                                        in={match != null}
                                        timeout={300}
                                        classNames="fade"
                                        appear
                                    >
                                        <Component {...match} />
                                    </CSSTransition>
                                );
                            }}
                        </AuthRoute>
                    ))}
                    <LogoutRoute exact path="/logout" />
                    <Route path={'/*'}>
                        <NotFound />
                    </Route>
                </Switch>
            </TransitionGroup>
        </Suspense>
    );
};

export default Routes;
