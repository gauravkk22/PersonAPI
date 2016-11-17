import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import configureStore from './store/configureStore';
import {loadAll, search, create} from './actions';

import {AppContainer} from './components/App';

const store = configureStore();

render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>,
	document.getElementById('app')
)
