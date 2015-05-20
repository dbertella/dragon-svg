import React from 'react'

let UiComponent = React.createClass({
	startGame: function () {
		this.setState({
			show: false
		});
	},

	getInitialState: function () {
		return {
			show: true
		};
	},
	render: function () {
		
		if (!this.state.show) {
			var style = {
				display: 'none'
			};
		}

		return (
			<div className="ui visible" style={style}>
				<button id="up">up</button>
				<button id="down">down</button><span></span><br />
				<p>This game is made using only svg paths and dash-array/dash-offset CSS properties. The javascript code checks the shoots and toggles CSS classes</p>
				<h4>Shoot the red dragons: <br />press "F" to fire the cannonball</h4>
				<button className="start-game" onClick={ this.startGame }>start game</button>
				<button className="button">donation</button>
				<button className="button">learn about dash-offset technique</button>
			</div>
			);
	}
});

export default UiComponent;