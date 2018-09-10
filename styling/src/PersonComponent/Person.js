import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
	const style = {
		'@media (max-width: 500px)': {
			width: '80%'
		}
	};

	return (
		<div className="person" style={style}>
			<p onClick={props.click}>I think my name is {props.name}</p>
			<p>Apparently I'm {Math.floor(Math.random() * 30)} years old even though I thought I was {props.age}...</p>
			<input type='text' onChange={props.changed} value={props.name} />
		</div>
	);
}


export default Radium(person);
