import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
	state = {
		username: 'supermax'
	}

	inputChangedHandler = (event) => {
		this.setState({
			username: event.target.value
		})	
	}

  render() {
    return (
      <div className="App">
				<h1>Assignment 1</h1>
				<UserInput 
					changed={this.inputChangedHandler} 
					currentName={this.state.username}>
				</UserInput>
				<UserOutput userName={this.state.username}></UserOutput>
				<UserOutput userName={this.state.username}></UserOutput>
				<UserOutput userName="Chuck"></UserOutput>
      </div>
    );
  }
}

export default App;
