import React from 'react';
import './Person.css';

const person = (props) => {
	return (
		<div className="person">
			<p>I'm a person... whatever that is...</p>
			<p onClick={props.click}>I think my name is {props.name}</p>
			<p>Apparently I'm {Math.floor(Math.random() * 30)} years old even though I thought I was {props.age}...</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.changed} value={props.name} />
		</div>
	);
}


export default person;
