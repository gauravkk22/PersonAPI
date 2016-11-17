import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import * as actionCreators from '../actions'

import Header from './Header/Header';
import ControlPanel from './ControlPanel/ControlPanel';
import ListsPanel from './ListsPanel/ListPanel';

import styles from './App.css';
import './common.css';

class App extends Component{

  render() {
    return (
    	<div className='container'>
            <Header localAPIavailable={this.props.localAPIAvailable}/>
    		<Row>
    			<Col sm={3}>
    				<ControlPanel search={this.props.search} 
                          create={this.props.create} 
                          loadAll={this.props.loadAll}
                          api={this.props.api}
                          setAPI={this.props.setAPI}
                          reset={this.props.reset}
                          connectDB={this.props.connectDB}/>
    			</Col>
    			<Col sm={9}>
    				<ListsPanel list={this.props.list}
                        deletePerson={this.props.deletePerson}
                        editPerson={this.props.editPerson}
                        api={this.props.api}/>
    			</Col>
    		</Row>
    	</div>
    )
  }
}

function mapStateToProps(state){
	return{
		list: state.get('list'),
    api : state.get('API'),
    localAPIAvailable: state.get('localAPIAvailable')
	};
}

export const AppContainer = connect(
    mapStateToProps,
    actionCreators
)(App);