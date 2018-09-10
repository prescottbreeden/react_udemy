import React from 'react';
import './ValidationComponent.css';


const validationComponent = (props) => {
	return (
		props.input.length >= 5 ? 
			<p className="valid">Valid Input</p> 
		: 
		<p className="invalid">Input Invalid</p>
	);
};


export default validationComponent;
