import React, { Component } from 'react';
import './Person.css';


class Person extends Component {
	render() {
		return (
			<div className="person">
				<p onClick={this.props.click}>I think my name is {this.props.name}</p>
				<p>Apparently I'm {Math.floor(Math.random() * 30)} years old even though I thought I was {this.props.age}...</p>
				<input type='text' onChange={this.props.changed} value={this.props.name} />
			</div>
		);
	}
}


export default Person;
