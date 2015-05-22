import React from 'react'
import Svg from './svgcomponent.jsx'
import Ui from './uicomponent.jsx'

let BoxGameComponent = React.createClass({

  getInitialState: function () {
    return {
      fired: false
    }
  },

  fire: function () {
    var self = this;
    this.setState({
      fired: true
    });
    setTimeout(function () {
        this.setState({
          fired: false
        });
    }.bind(this), 1600);
  },

  render: function() {
    
    return (
      <div className="box-game">

        <div id="tower-explosion" className=""></div>

        <div className="game-over">
          <h1>Game Over!</h1>
          <button className="start-game">restart</button>
        </div>
        

        <Ui />
        
        <Svg shot={ this.state.fired }/>
        
        <button className="fire-button" onClick={ this.fire } disabled={ this.state.fired }>FIRE!</button>

      </div>  
      
    )
  }
});

export default BoxGameComponent;