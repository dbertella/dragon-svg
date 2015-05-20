import React from 'react'
import Sky from './skycomponent.jsx'
import Ground from './groundcomponent.jsx'
import Dragons from './dragonscomponent.jsx'
import Castle from './castlecomponent.jsx'
import Cannon from './cannoncomponent.jsx'
import Hearts from './heartscomponent.jsx'
import Bullet from './bulletcomponent.jsx'

let SvgComponent = React.createClass({
  render: function() {
    
    return (
      
      <svg className="knight-" id="canvas" viewBox="-50 -176 850 430">
        <Sky />
        <Ground />
        <Dragons />
        <Castle />
        <Cannon />


        <Bullet />
        
        <Hearts />


      </svg>
    )
  }
});

export default SvgComponent;