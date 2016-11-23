import React, {Component} from 'react';
import {Form, 
		FormGroup, 
		ControlLabel, 
		FormControl, 
		Button,
		Col,
		ButtonToolbar} from 'react-bootstrap';

class controlPanel extends Component {

	constructor(){
		super();
		this.state ={
			searchId:'',
			createName:'',
			createAge: ''
		};
		this.search = this.search.bind(this);
		this.create = this.create.bind(this);
		this.updateInputValue= this.updateInputValue.bind(this);
	}

	search(e){
		e.preventDefault();
		if(this.state.searchId === ''){
			this.props.loadAll();
		}else{
			this.props.search(this.state.searchId);
			this.setState({'searchId': ''});
		}
	}

	create(e){
		e.preventDefault();
		this.props.create({
			name: this.state.createName,
			age : this.state.createAge
		})
	
		this.setState({'createName': '',
					   'createAge' : ''});
	}

	updateInputValue(name, e){
		let change ={};
		change[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<div className='well'>
				<h4>API</h4>
				<p>Current: {this.props.api}</p>
				<ButtonToolbar>
					<Button bsSize='small'
							bsStyle='primary'
							onClick={()=>{
								this.props.setAPI('localhost');
								this.props.reset();
								this.props.connectDB();} }>
						Localhost
					</Button>
				</ButtonToolbar>

				<hr/>

				<Form horizontal>
					<h4>Search</h4>
					<FormGroup controlId="searchId">
						<Col componentClass={ControlLabel} sm={1}>
							ID
						</Col>
						<Col sm={11}>
							<FormControl type='id'
										 placeholder='ID' 
										 value={this.state.searchId}
										 onChange={this.updateInputValue.bind(this, 'searchId')}/>
						</Col>
					</FormGroup>
					<Button bsStyle='primary' 
							bsSize='small'
							onClick={this.search}>
						Search
					</Button>
				</Form>

				<hr/>

				<Form horizontal>
					<h4>Create</h4>
					<FormGroup controlId="createName">
						<Col componentClass={ControlLabel} sm={1}>
							Name
						</Col>
						<Col sm={11}>
							<FormControl type='text' 
										 placeholder='Name' 
										 value={this.state.createName}
										 onChange={this.updateInputValue.bind(this, 'createName')}/>
						</Col>
					</FormGroup>
					<FormGroup controlId="createAge">
						<Col componentClass={ControlLabel} sm={1}>
							Age
						</Col>
						<Col sm={11}>
							<FormControl type='number' 
										 placeholder='Age' 
										 value={this.state.createAge}
										 onChange={this.updateInputValue.bind(this, 'createAge')}/>
						</Col>
					</FormGroup>
					<Button bsStyle='primary' 
						    bsSize='small'
						    onClick={this.create}>
						Create
					</Button>
				</Form>
			</div>
		)
	}
}

export default controlPanel;