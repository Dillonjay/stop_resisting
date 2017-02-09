import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			names: []
		}
	}
	render() {
		return (
			<div className="main">
				<h1>HELLO!</h1>
			</div>
		)
	}
	// addFriend(e){
 //  		// var names = this.state.items;
 //   	// 	names.push(this.state.input)
    	
 
 //  		// this.setState({
 //    // 		items: itemArray
 //  		// });
 
 //  		// this._inputElement.value = "";
 
 //  		// e.preventDefault();
	// }
}
module.exports = App
