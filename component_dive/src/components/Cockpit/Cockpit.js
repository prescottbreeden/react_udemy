import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit = (props) => {
	const assignedClasses = [];
	let btnClass = 'btn';
	if(props.showPersons) {
		btnClass = ['btn', 'red'].join(' ');
	}

	if(props.persons.length <=2) {
		assignedClasses.push('red');
	}
	if(props.persons.length <=1) {
		assignedClasses.push('bold');
	}

	return (
		<Aux>
			<h2>{props.title}</h2>
			<p className={assignedClasses.join(' ')}>There is no spoon</p>
			<button 
				className={btnClass}
				style={props.style}
				onClick={props.clicked}>
				Toggle Names
			</button>
		</Aux>
	)
}


export default cockpit;
