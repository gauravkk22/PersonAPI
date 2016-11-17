import React, {Component} from 'react';
import {Modal, Button, Form, FormGroup, Col, FormControl,ControlLabel } from 'react-bootstrap';


class warningModal extends Component {
	constructor(){
		super();
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(){
		const id = this.props.deleteData.get('id');
		this.props.deletePerson(id);
		this.props.close();
	}

	render() {
		return (
			<div className='modal-container' style={{height:200}}>
			<Modal
	          show={this.props.show}
	          onHide={this.props.close}
	          container={this}
	          aria-labelledby="contained-modal-title"
	        >
	          <Modal.Header>
	            <Modal.Title id="contained-modal-title">Delete Warning</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            Are you are you want to delete this person?
	            <h4><strong>ID: </strong> {this.props.deleteData.get('id')} </h4>
	            <h4><strong>Name: </strong> {this.props.deleteData.get('name')} </h4>
	            <h4><strong>Age: </strong> {this.props.deleteData.get('age')} </h4>
	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.handleDelete} bsStyle='danger'>Yes</Button>
	            <Button onClick={this.props.close}>Cancel</Button>
	          </Modal.Footer>
	        </Modal>
			</div>
		)
	}
}

export default warningModal;