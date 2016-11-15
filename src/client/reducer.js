import {Map} from 'immutable'

function setState(state, newState){
	console.log(newState)
	console.log(newState.toJS())
	console.log(state.toJS())
	console.log(state.merge(newState).toJS())
	return state.merge(newState)
}


export default function(state = Map(), action) {

	switch(action.type){
		case 'SET_STATE':
			return setState(state, action.state)
		// case 'CREATE':
		// 	return create(state, action.object)
		// case 'SEARCH':
		// 	return search(state, action.id)
	}
	return state
}