import React, { Component } from 'react';

class HomeWork1 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			a: 111,
			b: 555,
			c: {
				c1: 123,
				c2: 456,
				c3: 789,
				c4: 890,
			},
		};
	}
	changeValue = () => {
		this.setState((old) => ({
			a: 999,
			c: {
				...old.c,
				c2: 654,
				c4: 980,
			},
		}));
	};
render() {
		return (
			<div>
        
				<h2> a = {this.state.a}</h2>
				<h2> b = {this.state.b}</h2>
				<h2> c1 = {this.state.c.c1}</h2>
				<h2> c2 = {this.state.c.c2}</h2>
				<h2> c3 = {this.state.c.c3}</h2>
				<h2> c4 = {this.state.c.c4}</h2>
        <p>Click on update button to update values</p>
				<button onClick={this.changeValue}>Update</button>
			</div>
		);
	}
}

export default HomeWork1;
