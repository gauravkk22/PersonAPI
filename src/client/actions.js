import personApi from './api/personApi'
import axios from 'axios'
import {fromJS, List} from 'immutable'


export function setState(state) {
	return {
		type: 'SET_STATE',
		state
	}
}

// export function search(id){
// 	return {
// 		type: 'SEARCH',
// 		id
// 	}
// }

export function create(obj){
	return {
		type: 'CREATE',
		obj
	}
}

// export function search(id){
// 	return function(dispatch) {
// 		return personApi.getAllPersons().then(persons =>{
// 			dispatch(setState(persons))
// 		}).catch(error => {
// 			throw(error)
// 		})
// 	}
// }

export function search(id){
	return (dispatch, getState) =>{
		// console.log('http://localhost:8000/person/'+id)
		axios.get('http://localhost:8000/person/'+id)
			.then(res => {
				const state = getState()
				// console.log(res.data)
				// console.log(List.of(res.data))
				// const state = getState()
				// console.log(state)
				// console.log(state.toJS())
				// console.log('---------------------------')
				// console.log(state.remove('list'))
				// console.log(state.remove('list')
								 // .merge({list:List.of(res.data)}))
				// console.log(state.remove('list')
								 // .merge({list:List.of(res.data)}).toJS())
				// console.log('===========================')
				dispatch(setState(
					state.merge({list:res.data})
				))

				// console.log(state.toJS())
				// console.log(state.merge({list:List.of(res.data)}).toJS())
				// console.log(state.merge(state.merge({list:List.of(res.data)})).toJS())
			})
			.catch(err => {
				console.log(err)
			})

	}
}



export function loadAll(){
	return (dispatch, getState) =>{
		
		axios.get('http://localhost:8000/person')
			.then(res =>{
				const state = getState()
				// console.log(state.merge({list:res.data}))
				dispatch(setState(
					state.merge({list:res.data})
				))
			})
			.catch(err=>{
				console.log(err)
			})
	}
}