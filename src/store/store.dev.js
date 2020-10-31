import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { rootEpic, rootReducer } from './root';
import { routerMiddleware } from 'connected-react-router';
import history from './history';

//Components reducers
import { createLogger } from 'redux-logger';

const epicMiddleware = createEpicMiddleware();
const appRouterMiddleware = routerMiddleware(history);
const preloadedState = {
    apiUrl: {
        services: 'http://d692498e6fb0.eu.ngrok.io/api',
        auth: 'http://40c61efd165c.eu.ngrok.io/api'
    }
};

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(appRouterMiddleware, epicMiddleware, createLogger()),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);
epicMiddleware.run(rootEpic);

export default store;