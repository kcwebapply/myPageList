import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import './css/style.css';
import './css/text.css';
import './css/select.css';
import './css/page.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import PageReducer  from './reducer/PageReducer';
import PageListContainer from './container/PageListContainer';




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
serviceWorker.unregister();
