import React, { Component, Fragment } from 'react';
import './Person.css';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';


class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElement = React.createRef();

		console.log('[CREATE] p.js constructor', props);
	}
	componentWillMount() {
		console.log('[CREATE] p.js will mount');
	}
	componentWillUnmount() {
		console.log('[CREATE] p.js will unmount');
	}
	componentDidMount() {
		console.log('[CREATE] p.js did mount')
		if(this.props.position === 0) {
			this.inputElement.current.focus();
		}
	}
	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE] p.js will receive props');
	}
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[UPDATE] p.js should?', nextProps, nextState);
	// 	return nextProps.persons !== this.props.persons;
	// }
	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE] p.js will update');
	}

	render() {
		console.log('[RENDER] p.js render')
		return (
			<div className="person">
				<AuthContext.Consumer>
					{auth => auth ? <p>Authorized</p> : <p>Not Authorized</p>}
				</AuthContext.Consumer>
				<p 
					onClick={this.props.click}>
					I think my name is {this.props.name}</p>
				<p>
					Apparently I'm {Math.floor(Math.random() * 30)} years old even though 
					I thought I was {this.props.age}...</p>
				<input 
					ref={this.inputElement}
					type='text' 
					onChange={this.props.changed} 
					value={this.props.name} />
			</div>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default Person;
