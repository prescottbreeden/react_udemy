import React, { Fragment } from 'react';
import classes from './Cockpit.css';


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
		<Fragment>
			<h2>{props.title}</h2>
			<p className={assignedClasses.join(' ')}>There is no spoon</p>
			<button 
				className={btnClass}
				style={props.style}
				onClick={props.clicked}>
				Toggle Names
			</button>
		</Fragment>
	)
}


export default cockpit;
