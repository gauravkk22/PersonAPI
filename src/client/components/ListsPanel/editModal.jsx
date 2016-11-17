import React, {Component} from 'react';
import {Modal, Button, Form, FormGroup, Col, FormControl,ControlLabel } from 'react-bootstrap';


class editModal extends Component {

	constructor(props){
		super(props);
		this.state = {
			editName:"",
			editAge: ""
		};
		this.getProps = this.getProps.bind(this);
		this.updateInputValue = this.updateInputValue.bind(this);
		this.editData = this.editData.bind(this);
	}

	editData(){
		this.props.editPerson({
			"id": this.props.editData.get('id'),
			"name": this.state.editName,
			"age": this.state.editAge
		});
		this.props.close();
	}

	getProps(){
		this.setState({
			editName: this.props.editData.get('name'),
			editAge: this.props.editData.get('age')			
		});
	}

	updateInputValue(name, e){
		let change = {};
		change[name] = e.target.value;
		this.setState(change);
	}


	render() {

		return(
			<div className='modal-container' style={{height:200}}>
				<Modal show={this.props.show}
					   onHode={this.props.close}
					   container={this}
					   aria-labelledby="contained-modal-title"
					   onEntering={this.getProps}>
					<Modal.Header >
            			<Modal.Title id="contained-modal-title">Edit {this.props.editData.get('id')}</Modal.Title>
          			</Modal.Header>
			        <Modal.Body>
			        	<Form horizontal>
			        		<FormGroup controlId="editName">
			        			<Col componentClass={ControlLabel} sm={2}>
			        				Name
			        			</Col>
			        			<Col sm={8}>
			        				<FormControl type='text' 
			        							 placeholder="Name" 
			        							 value={this.state.editName}
			        							 onChange={this.updateInputValue.bind(this, 'editName')}/>
			        			</Col>
			        		</FormGroup>
			        		<FormGroup controlId="editAge">
			        			<Col componentClass={ControlLabel} sm={2}>
			        				Age
			        			</Col>
			        			<Col sm={8}>
			        				<FormControl type='number' 
			        				             placeholder="Age" 
			        				             value={this.state.editAge}
			        				             onChange={this.updateInputValue.bind(this, 'editAge')}/>
			        			</Col>
			        		</FormGroup>
			        	</Form>
			        </Modal.Body>
			        <Modal.Footer>
		        		<Button onClick={this.editData}>
		        			Save
		        		</Button>
			        	<Button onClick={this.props.close}>Close</Button>
			        </Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default editModal;