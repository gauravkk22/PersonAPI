import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import configureStore from './store/configureStore'
import {loadAll, search} from './actions'

import {AppContainer} from './components/App'

const store = configureStore()
// const store = createStore(reducer)
// store.dispatch({
// 	type:'SET_STATE',
// 	state: {
// 		"list": [
// 	 		{
// 				"id": 1,
// 				"name": "Joe Smith",
// 				"age": 20
// 			},
// 			{
// 				"id": 2,
// 				"name": "Bob Jones",
// 				"age": 10
// 			},
// 			{
// 				"id": 3,
// 				"name": "Wanda West",
// 				"age": 50
// 			}
//  		]
// 	}
// })

store.dispatch(loadAll())
store.dispatch(search('582a0979b4fcbd18d4e3e8e2'))

render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>,
	document.getElementById('app')
)
