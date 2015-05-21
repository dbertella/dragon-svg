import React from 'react'
import Sky from './svgcomponents/skycomponent.jsx'
import Ground from './svgcomponents/groundcomponent.jsx'
import Dragons from './svgcomponents/dragonscomponent.jsx'
import Castle from './svgcomponents/castlecomponent.jsx'
import Cannon from './svgcomponents/cannoncomponent.jsx'
import Hearts from './svgcomponents/heartscomponent.jsx'
import Bullet from './svgcomponents/bulletcomponent.jsx'

let SvgComponent = React.createClass({
  
  getInitialState: function () {
    return {
      dragonNumber: Math.floor(Math.random() * 5)
    }
  },

  componentDidMount: function () {
    setTimeout(function () {
      this.setState({
        dragonNumber: Math.floor(Math.random() * 5)
      });
    }.bind(this), 5000);
  },

  render: function() {

    //this.componentDidMount();
    
    return (
      
      <svg className="knight-" id="canvas" viewBox="-50 -176 850 430">
        <Sky />
        <Ground />
        <Dragons randomDragonNumber={this.state.dragonNumber} />
        <Castle />
        <Cannon />
        <Bullet shot={ this.props.shot } />
        <Hearts />
      </svg>
    )
  }
});

export default SvgComponent;