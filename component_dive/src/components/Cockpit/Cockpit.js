import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

	const classes = [];
	if(props.showPersons) {
		console.log('balls');
	}

	// style.backgroundColor = 'lightblue';
	if (props.persons.length <= 2) {
		classes.push('red');
	}

	if (props.persons.length <= 1) {
		classes.push('bold');
	}

	return (
		<div>
			<h2>{props.title}</h2>
			<button 
				className='btn'
				style={props.style}
				onClick={props.clicked}>
				Toggle Names
			</button>
		</div>
	)
}


export default cockpit;
