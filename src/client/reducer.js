import {Map, fromJS} from 'immutable';

const INITIAL_STATE = fromJS({
	API: "",
	localAPIAvailable: false,
});

function setState(state, newState){
	return state.merge(newState);
}

function setAPI(state, api){
	return state.merge({API:api});
}

function reset(state){
	return state.remove('list');
}

export default function(state = INITIAL_STATE, action) {

	switch(action.type){
		case 'SET_STATE':
			return setState(state, action.state)
		case 'SET_API':
			return setAPI(state, action.api)
		case 'RESET':
			return reset(state)
	}
	return state;
}