import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import {fromJS, Map} from 'immutable';

import EditModal from './editModal';
import WarningModal from './warningModal';
import NotFind from './notFind';

class ListPanel extends Component{

	constructor(){
		super();
		this.state={
			showEditModal:false,
			showDeleteModal: false,
			editData:Map(),
			deleteData:Map()
		};
		this.getList = this.getList.bind(this);
		this.closeEditModal = this.closeEditModal.bind(this);
		this.openEditModal = this.openEditModal.bind(this);
		this.closeDeleteModal = this.closeDeleteModal.bind(this);
		this.openDeleteModal = this.openDeleteModal.bind(this);
	}

	getList(){
		return this.props.list || [];
	}

	closeEditModal(){
		this.setState({
			showEditModal: false
		});
	}

	closeDeleteModal(){
		this.setState({
			showDeleteModal: false
		});
	}

	openDeleteModal(obj){
		let data = obj;
		if(this.props.api === 'localhost'){
			data = data.set('id',obj.get('_id'))
				.remove('_id');
		}
		this.setState({
			showDeleteModal: true,
			deleteData: data
		});
	}

	openEditModal(obj){
		let data = obj;
		if(this.props.api === 'localhost'){
			data = data.set('id',obj.get('_id'))
				.remove('_id');
		}
		this.setState({
			showEditModal: true,
			editData: data
		});
	}

	render() {
		return (
			<div>
				{this.getList().length === 0? 
					<NotFind/> :	
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
									{this.props.api === 'starfish'? 
										<td>{item.get('id')}</td>:
										<td>{item.get('_id')}</td>}
							        <td>{item.get('name')}</td>
							        <td>{item.get('age')}</td>
							        <td>
							        	<Button bsStyle='primary'
							        			onClick={()=>this.openEditModal(item)}>
							        		Edit
							        	</Button>
							        </td>
							        <td>
							        	<Button bsStyle='danger'
							        			onClick={()=>this.openDeleteModal(item)}>
							        		Delete
							        	</Button>
							        </td>
					      		</tr>
							) 
						})}
						</tbody>
					</Table>
				}
				<EditModal close={this.closeEditModal}
						   show={this.state.showEditModal}
						   editData={this.state.editData}
						   editPerson={this.props.editPerson}/>
			    <WarningModal close={this.closeDeleteModal}
			    			  show={this.state.showDeleteModal}
			    			  deleteData={this.state.deleteData}
			    			  deletePerson={this.props.deletePerson}/>
			</div>
		)
	}
}

export default ListPanel;