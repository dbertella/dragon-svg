import React from 'react'
import Svg from './svgcomponent.jsx'
import Ui from './uicomponent.jsx'

let BoxGameComponent = React.createClass({


  render: function() {
    
    return (
      <div className="box-game">

        <div id="tower-explosion" className=""></div>

        <div className="game-over">
          <h1>Game Over!</h1>
          <button className="start-game">restart</button>
        </div>
        

        <Ui />
        
        <Svg />
        
        <button className="fire-button">FIRE!</button>

      </div>  
      
    )
  }
});

export default BoxGameComponent;