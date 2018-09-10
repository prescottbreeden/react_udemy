import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';

class App extends Component {
	state = {
		persons: [
			{ name: 'bob', age: 34 },
			{ name: 'chuck', age: 28 },
			{ name: 'bugs', age: 50 },
			{ name: 'dick', age: 90 },
			{ name: 'jane', age: 22 },
			{ name: 'anita', age: 27 }
		],
		otherState: 'something else of value'
	};

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 34 },
				{ name: newName, age: 28 },
				{ name: newName, age: 50 },
				{ name: newName, age: 90 },
				{ name: newName, age: 22 },
				{ name: newName, age: 27 }
			]
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: event.target.value, age: 34 },
				{ name: event.target.value, age: 28 },
				{ name: event.target.value, age: 50 },
				{ name: event.target.value, age: 90 },
				{ name: event.target.value, age: 22 },
				{ name: event.target.value, age: 27 }
			]
		});
	};

  render() {
		const style = {
			backgroundColor: 'steelblue',
			font: 'inherit',
			border: 'none',
			padding: '18px 50px',
			color: 'white',
			borderRadius: '200px'
		};

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
				<h2>rubber baby buggy bumpers</h2>
				<button 
					style={style}
					onClick={() => this.switchNameHandler('dingo')}>
					Switch Name
				</button>
				<Person 
					changed={this.nameChangedHandler}
					name={this.state.persons[0].name} 
					age={this.state.persons[0].age}>
					My hobbies: Racing
				</Person>
				<Person 
					changed={this.nameChangedHandler}
					name={this.state.persons[1].name} 
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Norris!')}>
					My hobbies: Kicking
				</Person>
				<Person 
					changed={this.nameChangedHandler}
					name={this.state.persons[2].name} 
					age={this.state.persons[2].age}>
					My hobbies: Eating Carrots
				</Person>
				<Person 
					changed={this.nameChangedHandler}
					name={this.state.persons[3].name} 
					age={this.state.persons[3].age}>
					My hobbies: Asshole
				</Person>
				<Person 
					changed={this.nameChangedHandler}
					name={this.state.persons[4].name} 
					age={this.state.persons[4].age}>
					My hobbies: Sucking
				</Person>
				<Person 
					changed={this.nameChangedHandler}
					name={this.state.persons[5].name} 
					age={this.state.persons[5].age}>
					My hobbies: Fucking
				</Person>
      </div>
    );
  };
};

export default App;
