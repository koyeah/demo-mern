import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import listReducer from './store/reducers/list'
import detaileReducer from './store/reducers/detail'
import editReducer from './store/reducers/edit'


// import loginReducer from './store/reducers/login'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
const BrowserRouter = require('react-router-dom').BrowserRouter

// axios.defaults.baseURL = 'http://demoapi.tmn2njb5pr.ap-southeast-1.elasticbeanstalk.com/api'; 
axios.defaults.baseURL = 'http://localhost:1234/api'; 
axios.defaults.headers.post['Content-Type'] = 'application/json';


const rootReducer = combineReducers({

    list: listReducer,
    detail: detaileReducer,
    edit: editReducer
    // login: loginReducer
})
// const logger = store => { //middleware
//     return next => {
//         return action => {
//             console.log('[Middleware] dispatch action', action);
//             const result = next(action);
//             console.log('[Middleware] next state', store.getState());
//             return result;
//         }
//     }
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux devtool
const store = createStore(rootReducer, composeEnhancers(applyMiddleware( thunk)));


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
