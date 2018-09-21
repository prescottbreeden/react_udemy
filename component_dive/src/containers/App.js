import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';
import Cockpit from '../components/Cockpit/Cockpit';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			persons: [
				{ id: 4, name: 'alan', age: 90 },
				{ id: 5, name: 'jane', age: 22 },
				{ id: 6, name: 'anita', age: 27 },
				{ id: 7, name: 'ada', age: 228 }
			],
			showPersons: false,
			validationInput: '',
			toggleClicked: 0,
			authenticated: false
		};
		console.log('[CREATE] persons.js constructor', props);
	}
	componentWillUnmount() {
		console.log('[CREATE] persons.js will unmount');
	}
	componentDidMount() {
		console.log('[CREATE] persons.js did mount')
	}

	// see 'togglePersonHandler for perferrable method to return 2+ state changes'
	
	//shouldComponentUpdate(nextProps, nextState) {
	//	console.log('[UPDATE] app.js should?', nextProps, nextState);
	//	// return !this.state.showPersons;
	//	//	return true;
	//	return(
	//		nextState.persons !== this.state.persons ||
	//		nextState.showPersons !== this.state.showPersons
	//	);
	//}
	
	// unsafe lifecycle methods
	// componentWillMount() {
	// 	console.log('[CREATE] persons.js will mount');
	// }
	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('[UPDATE] app.js will update');
	// }
	// componentWillReceiveProps(nextProps) {
	// 	console.log('[UPDATE] app.js will receive props');
	// }

	
	// new lifecycle hooks added in 16.something
	static getDerivedStateFromProps(nextProps, prevState) {
		console.log(
			'[UPDATE] app.js inside getDerivedStateFromProps',
			nextProps,
			prevState
		);

		return prevState;
	}

	getSnapshotBeforeUpdate() {
		console.log('[UPDATE] app.js getSnapshotBeforeUpdate');
		// save a scroll position (e.g.)
		return null;
	}

	componentDidUpdate() {
		console.log('[UPDATE] app.js did update');
		// return user to the saved scroll position (e.g.)
	}

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
		this.setState( (prevState, props) => { 
			return {
				showPersons: !doesShow,
				toggleClicked: this.state.toggleClicked + 1
			}
		} );
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}

	loginHandler = () => {
		this.setState({ authenticated: true });
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
		console.log('[RENDER] app.js render');

		// create persons list
		let persons = null;
		if(this.state.showPersons) {
			persons = <Persons 
						persons={this.state.persons}	
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler} />;
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


    return (
      <div className="App">
				<button
					onClick={()=> this.setState({showPersons: true})}>Show Persons</button>
				<Cockpit 
					title={this.props.title}
					login={this.loginHandler}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}	/>
				{ this.state.showPersons ? <p>Showing</p>	: <p>Hiding</p> }

				<AuthContext.Provider 
					value={this.state.authenticated}>
					{persons}
				</AuthContext.Provider>
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
