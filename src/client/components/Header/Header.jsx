import React, {Component} from 'react';

import styles from './Header.css';

class header extends Component {

	render() {
		return (
			<div className={styles.header}>

				<h4>API Status</h4>
				<h5>- Localhost API: <strong className={
										this.props.localAPIavailable? 
										styles.green:styles.red}
									>
										{this.props.localAPIavailable? 'Connected': 'Not connect'}
									</strong>
				</h5>

			</div>
		)
	}
}

export default header;