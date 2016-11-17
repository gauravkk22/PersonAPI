import {fromJS, Map} from 'immutable';
import {expect} from 'chai';

import reducer from '../../src/client/reducer';

describe('reducer', () => {

	it('handle SET_STATE', ()=> {
		const initialState = Map()
		const newState =  fromJS({
			API: "starfish",
			localAPIAvailable: false,
		});
		const action = {type:'SET_STATE', state:newState};
		const nextState = reducer(initialState, action);
		// console.log(state.toJS())
		
		// console.log(newState.toJS())
		expect(initialState).to.equal(Map());
		expect(newState).to.equal(fromJS({
			API: "starfish",
			localAPIAvailable: false,
		}));
		expect(nextState).to.equal(fromJS({
			API: "starfish",
			localAPIAvailable: false,
		}));
	});

	it('handle SET_API', ()=>{
		const initialState = fromJS({
			API: 'starfish'
		});
		const action = {type:'SET_API', api:'localhost'};
		const nextState = reducer(initialState, action);

		expect(initialState).to.equal(fromJS({
			API: 'starfish'
		}));
		expect(nextState).to.equal(fromJS({
			API: 'localhost'
		}));
	});

	it('handle RESET', ()=>{
		const initialState = fromJS({
			list:[1,2,3,4]
		});
		const action = {type:'RESET'};
		const nextState = reducer(initialState, action);

		expect(initialState).to.equal(fromJS({
			list:[1,2,3,4]
		}));
		expect(nextState).to.equal(fromJS({

		}));
	});
});