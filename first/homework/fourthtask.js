import React, { Component } from 'react';

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = { firstNum: '', secondNum: '', result: '' };
	}

	componentDidUpdate(oldProps, oldState) {
		if (oldState.firstNum !== this.state.firstNum || oldState.secondNum !== this.state.secondNum) {
			this.setState({
				result: parseInt(this.state.firstNum, 10) * parseInt(this.state.secondNum, 10),
			});
		}
	}

	changeFirstNum = (event) => {
		this.setState({
			firstNum: event.target.value,
		});
	};

	changeSecondNum = (event) => {
		this.setState({
			secondNum: event.target.value,
		});
	};

	render() {
		return (
			<div>
				<label>
					<h2>First Input:</h2>
					<input type="number" value={this.state.firstNum} onChange={this.changeFirstNum} />
				</label>
				<label>
				<h2>Second Input:</h2>
					<input type="number" value={this.state.secondNum} onChange={this.changeSecondNum} />
				</label>
				<h3>Final value</h3>
				<h3>{!isNaN(this.state.result) && this.state.result}</h3>
			</div>
		);
	}
}

export default Task;
