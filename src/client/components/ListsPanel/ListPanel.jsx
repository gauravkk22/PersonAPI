import React, {Component} from 'react'
import {Table} from 'react-bootstrap'

class ListPanel extends Component{

	constructor(){
		super()
		this.getList = this.getList.bind(this)
	}

	getList(){
		return this.props.list || []
	}

	render() {
		return (
			<div>	
				<Table striped bordered condensed hover>
				    <thead>
				      <tr>
				        <th>ID</th>
				        <th>Name</th>
				        <th>Age</th>
				        <th>Edit</th>
				        <th>Delete</th>
				      </tr>
				    </thead>
				    <tbody>
					{this.getList().map((item, index) =>{
						return (
							<tr key={index}>
						        <td>{item.get('_id')}</td>
						        <td>{item.get('name')}</td>
						        <td>{item.get('age')}</td>
						        <td>edit</td>
						        <td>delete</td>
				      		</tr>
						) 
					})}
					</tbody>
				</Table>
			</div>
		)
	}
}

export default ListPanel