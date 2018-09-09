import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
				<h2>rubber baby buggy bumpers</h2>
				<Person name="bob" age="34" />
				<Person name="bob" age="28" />
				<Person name="joe" age="99" />
      </div>
    );
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'how about this?'));
  }
}

export default App;
