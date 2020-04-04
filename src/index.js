import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import PageReducer  from './reducer/PageReducer';
import PageListContainer from './container/PageListContainer';




// Create a database



const store = createStore(PageReducer);

function renderApp(store){
    render (
        <Provider store={store}>
           <PageListContainer>
          </PageListContainer>
        </Provider>,
        document.getElementById("root")
    );
}



renderApp(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
