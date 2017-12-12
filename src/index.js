import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import ProductsPageContainer from './containers/productsPageContainer';

const store = createStore(
    combineReducers({
        ...reducers
    })
);

ReactDOM.render((
    <Provider store={store}>
        <ProductsPageContainer />
    </Provider>
), document.getElementById('app'));
