import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

// This is how to make a hook ******************************************************************************************
// const app = props => {
// 	const [ personState, setPersonState ] = useState({
// 		persons : [ { name: 'Max', age: 28 }, { name: 'Manu', age: 38 }, { name: 'Steph', age: 54 } ],
// 	});
// };

// const [ otherState, setOtherState ] = useState('some other value');

// console.log(personState, otherState);

// const switchNameHandler = (newName) => {
// 	setPersonState({
// 		persons : [ { name: newName, age: 28 }, { name: 'Manu', age: 38 }, { name: 'Steph', age: 54 } ],
//   });

//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//         { name: newName, age: 28 }, { name: event.target.value, age: 38 }, { name: 'Steph', age: 54 }
//       ]
//     })
//   };
// }

// This is how to make a hook ******************************************************************************************

class App extends Component {
	state = {
		persons    : [ { name: 'Max', age: 28 }, { name: 'Manu', age: 34 }, { name: 'Steph', age: 19 } ],
		otherState : 'some other value',
	};

	switchNameHandler = newName => {
		this.setState({
			persons : [ { name: newName, age: 28 }, { name: 'Manu', age: 34 }, { name: 'Steph', age: 19 } ],
		});
	};

	nameChangedHandler = event => {
		this.setState({
			persons : [ { name: 'Max', age: 28 }, { name: event.target.value, age: 34 }, { name: 'Steph', age: 19 } ],
		});
	};

	render() {
		const style = {
			backgroundColor : 'white',
			font            : 'inherit',
			border          : '1px solid blue',
			padding         : '8px',
			cursor          : 'pointer',
		};
		return (
			<div className='App'>
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button style={style} onClick={() => this.switchNameHandler('Maxxxxxx!')}>
					Switch Name
				</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Max!')}
					changed={this.nameChangedHandler}>
					My Hobbies: Racing
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
	}
}

export default App;
