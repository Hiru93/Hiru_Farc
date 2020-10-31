import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { rootEpic, rootReducer } from './root';
import { routerMiddleware } from 'connected-react-router';
import history from './history';

//Components reducers

const epicMiddleware = createEpicMiddleware();
const appRouterMiddleware = routerMiddleware(history);
const preloadedState = {
    apiUrl: {
        services: '/api',
        auth: '/api'
    }
};

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(appRouterMiddleware, epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
