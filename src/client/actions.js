import axios from 'axios';
import {fromJS, List} from 'immutable';

function getURL(apiOption){
	let url;
	if(apiOption === ''){
		url = '';
	}else if(apiOption === 'localhost'){
		url = 'http://localhost:8000/person';
	}

	return url;
}

export function setState(state) {
	return {
		type: 'SET_STATE',
		state
	};
}

export function setAPI(api) {
	return {
		type: 'SET_API',
		api
	};
}

export function reset(){
	return {
		type: 'RESET'
	};
}

export function create(obj){
	return (dispatch, getState) => {
		const state = getState();
		const url = getURL(state.get('API'));

		axios.post(url,{
			"name": obj.name,
			"age" : parseInt(obj.age)
		})
		.then(res =>{
			console.log(res)
			dispatch(loadAll())
		})
		.catch(err =>{
			console.log(err)
		}
		)
	}
}

export function connectDB(){
	return (dispatch, getState) => {
		const state = getState();

		axios.get('http://localhost:8000/connectDB')
			.then(res => {
				let connected = false;
				if(res.data.connect !== 'fail'){
					console.log('connected~~~')
					connected = true
				}
				dispatch(setState( 
					state.merge({localAPIAvailable: connected})
				))
			})
			.catch(err => {
				console.log(err);
			})

	}
}


export function deletePerson(id){
	return (dispatch, getState) =>{
		const state = getState();
		const url   = getURL(state.get('API'));

		axios.delete(url+'/'+id)
			.then(res =>{
				dispatch(loadAll())
			})
			.catch(err =>{
				console.log(err)
			})
	}
}

export function editPerson(obj){
	return (dispatch, getState) => {
		const state = getState();
		const url   = getURL(state.get('API'));

		axios.put(url+'/'+obj.id,{
			name: obj.name,
			age: parseInt(obj.age)
		})
		.then(res =>{
			dispatch(loadAll())
		})
		.catch(err => {
			console.log(err)
		})
	}  
}

export function search(id){
	return (dispatch, getState) =>{
		const state = getState();
		const url = getURL(state.get('API'));
		axios.get(url+'/'+id)
			.then(res => {
				dispatch(setState(
					state.merge({list:[res.data]})
				));
			})
			.catch(err => {
				console.log(err);
			})

	}
}

export function loadAll(){
	return (dispatch, getState) =>{
		const state = getState();
		const url = getURL(state.get('API'));
		axios.get(url)
			.then(res =>{
				dispatch(setState(
					state.merge({list:res.data.list})
				));
			})
			.catch(err=>{
				console.log(err);
			})
	}
}