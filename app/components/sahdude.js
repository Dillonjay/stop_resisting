import React from 'react';

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
				<ul>
					{
						this.state.names.map(function(name,i){
							return <li key={i}>{ name }... Sah Dude!!</li>
						})
					}
				</ul>
				<form onSubmit={this.addFriend.bind(this)}>
          <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
          <button type="submit">Add A friend!</button>
          <button onClick={this.delete.bind(this)}>Remove!</button>
        </form>
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
