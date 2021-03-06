import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';

class App extends Component {
	state = {
		persons: [
			{ id: 1, name: 'bob', age: 34 },
			{ id: 2, name: 'chuck', age: 28 },
			{ id: 3, name: 'bugs', age: 50 },
			{ id: 4, name: 'alan', age: 90 },
			{ id: 5, name: 'jane', age: 22 },
			{ id: 6, name: 'anita', age: 27 },
			{ id: 7, name: 'ada', age: 228 }
		],
		showPersons: false,
		validationInput: ''
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => p.id === id);
		const person = {...this.state.persons[personIndex]};
		const persons = [...this.state.persons];
		person.name = event.target.value;
		persons[personIndex] = person;
		this.setState( {persons: persons} );
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}

	validateInput = (event) => {
		this.setState({validationInput: event.target.value});
	}

	deleteChar = (index) => {
		const text = this.state.validationInput.split('');
		text.splice(index, 1);
		const updatedText = text.join('');
		this.setState({validationInput: updatedText});
	}

  render() {
		// define button style
		const style = {
			backgroundColor: 'steelblue',
			font: 'inherit',
			border: 'none',
			padding: '15px 50px',
			color: 'white',
			borderRadius: '200px',
			boxShadow: '0 10px 20px rgba(0,0,0,.2)',
			outline: 'none'
		};

		// create persons list
		let persons = null;
		if(this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
								<Person 
									key={person.id}	
									name={person.name} 
									age={person.age}
									click={() => this.deletePersonHandler(index)}
									changed={(event) => this.nameChangedHandler(event, person.id)}
								/>
						);
					})}
				</div>
			);
			style.backgroundColor = 'lightblue';
		}

		// create char list
		const charList = this.state.validationInput.split('').map((ch, index) => {
			return (
				<Char
					character={ch} 
					key={index}  
					clicked={() => this.deleteChar(index)}
				/>
			);
		});

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

    return (
      <div className="App">
				<h2>rubber baby buggy bumpers</h2>
				<button 
					style={style}
					onClick={this.togglePersonsHandler}>
					Toggle Names
				</button>
				{ this.state.showPersons ? <p>Showing</p>	: <p>Hiding</p> }
				<div className={classes.join(' ')}>
					{ persons }
				</div>
				<input 
					type='text'
					onChange={this.validateInput} 
					value={this.state.validationInput} />

				<p>{ this.state.validationInput }</p>
				<Validation input={this.state.validationInput} />	
				{ charList }
      </div>
    );
  };
};

export default App;
