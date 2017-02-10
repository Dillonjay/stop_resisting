import React from 'react';
import Dude from '../images/Dude.jpg'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			names: [],
			name: ''
		}
	}
	render() {
		return (
			<div className="main">
				<form onSubmit={this.addFriend.bind(this)}>
           <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="add a friend" />
           <button type="submit">Add A friend!</button>
           <button onClick={this.delete.bind(this)}>Remove!</button>
        </form>
			  <ul>
					{
						this.state.names.map(function(name,i){
							return <div key={ i }>
								<h3>{ name }... Sah Dude!!</h3>
								<img className="dude" src={ Dude } />
								</div>
						})
					}
				</ul>
			</div>
		)
	}
	handleChange(event) {
    this.setState({name: event.target.value});
  }
  delete(e) {
  	let names = this.state.names;
  	names.pop();
  	this.setState({ names });
  	e.preventDefault();
  }
	addFriend(e){
  	let names = this.state.names;
   	names.push(this.state.name);
  	this.setState({ names, name:'' });
  	e.preventDefault();
	}
}
