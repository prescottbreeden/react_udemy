import React from 'react';
import './Validation.css';


const validation= (props) => {
	return (
		props.input.length >= 5 ? 
			<p className="valid">Valid Input</p> 
		: 
		<p className="invalid">Input Invalid</p>
	);
};


export default validation;
