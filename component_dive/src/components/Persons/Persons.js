import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
	constructor(props) {
		super(props);
		console.log('[CREATE] persons.js constructor', props);
	}
	componentWillMount() {
		console.log('[CREATE] persons.js will mount');
	}
	componentWillUnmount() {
		console.log('[CREATE] persons.js will unmount');
	}
	componentDidMount() {
		console.log('[CREATE] persons.js did mount')
	}
	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE] persons.js will receive props');
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[UPDATE] persons.js should?', nextProps, nextState);
		return nextProps.persons !== this.props.persons;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE] persons.js will update');
	}
	componentDidUpdate() {
		console.log('[UPDATE] persons.js did update')
	}
	
	render() {
		console.log('[RENDER] persons.js render')
		return this.props.persons.map((person, index) => {
			return <Person 
						key={person.id}	
						name={person.name} 
						age={person.age}
						click={() => this.props.clicked(index)}
						changed={(event) => this.props.changed(event, person.id)} />
		});
	}
}


export default Persons;
