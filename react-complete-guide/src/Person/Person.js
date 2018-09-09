import React from 'react';


const person = (props) => {
	return (
		<div className="person">
			<p>I'm a person... whatever that is...</p>
			<p>I think my name is {props.name}</p>
			<p>Apparently I'm {Math.floor(Math.random() * 30)} years old even though I thought I was {props.age}...</p>
		</div>
	);
}


export default person;
