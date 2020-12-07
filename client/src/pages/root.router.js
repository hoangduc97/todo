import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Loading from '../components/loading/loading.component';

const TIMEOUT = 2000;

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
    },
    {
        path: '/lists',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./home/home.page'))
        ),
    },
    {
        path: '/lists/:list_id',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./listdetail/listdetail.page'))
        ),
    },
    {
        path: '/schedule',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./schedule/schedule.page'))
        ),
    },
    {
        path: '/today',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./schedule/schedule.page'))
        ),
    },
    {
        path: '/signin',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./schedule/schedule.page'))
        ),
    },
    {
        path: '/signup',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./schedule/schedule.page'))
        ),
    },
];

const Router = (props) => {
    return (
        <Suspense fallback={<Loading/>}>
            <TransitionGroup>
                <Switch>
                    {routes.map(({path, Component}) => (
                        <Route key={path} exact path={path}>
                            {({match}) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="fade"
                                    appear
                                >
                                    <Component/>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </Switch>
            </TransitionGroup>
        </Suspense>
    );
};

export default Router;
