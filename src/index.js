import React from 'react';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { ConnectedRouter } from 'connected-react-router';
import history from './store/history';

//Styles
import './index.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

//Core imports from libraries

//Root component
import App from './containers/App';

//State component
import store from './store/index';

//Provider mechanic
import { Provider } from 'react-redux';

render (
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <ToastContainer
                position="bottom-right"
                autoClose={ 3000 }
                hideProgressBar={ false }
                newestOnTop={ false }
                pauseOnVisibilityChangedraggable
                pauseOnHover
            />
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);