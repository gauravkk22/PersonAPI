import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'

import Header from './Header/Header'
import ControlPanel from './ControlPanel/ControlPanel'
import ListsPanel from './ListsPanel/ListPanel'

import styles from './App.css'
import './common.css'

class App extends Component{
  render() {
    return (
    	<div className='container'>
    		<Header />
    		<Row>
    			<Col sm={4}>
    				<ControlPanel />
    			</Col>
    			<Col sm={8}>
    				<ListsPanel list={this.props.list}/>
    			</Col>
    		</Row>
    	</div>
    )
  }
}

function mapStateToProps(state){
	return{
		list: state.get('list')
	}
}

export const AppContainer = connect(mapStateToProps)(App)