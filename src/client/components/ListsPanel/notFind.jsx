import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';


class notFind extends Component{

	render() {
		return (
			<Jumbotron>
				<h4><strong>Function</strong></h4>
				<h5>- Click "Search" button without Input will return all the person in databse.</h5>
				<h5>- Click "localhost" button, client will send a "connect database" request to the server.</h5>
				<h4><strong>API List</strong></h4>
				<h5>- localhost: http://localhost:8000/person</h5>
				<h5>-- GET:    /person</h5>
				<h5>-- GET:    /person/:id</h5>
				<h5>-- POST:   /person</h5>
				<h5>-- PUT:    /person/:id</h5>
				<h5>-- DELETE: /person/:id</h5>
				<h4><strong>Note</strong></h4>
				<h5>- localhost API will only work if server connected to your local mongoDB.</h5>
				<h5>- mongoDB should set the port at <code>localhost:27017</code></h5>
			</Jumbotron>
		)
	}
}

export default notFind;