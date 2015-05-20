import React from 'react'


let HeartsComponent = React.createClass({
	render: function () {
		return (
			<g>
				<path id="heart-1" fill="none" stroke="crimson" strokeWidth="5" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
				M160.025,175.92c-4.522,0-8.188,3.666-8.188,8.188c0-4.521-3.666-8.188-8.186-8.188c-4.522,0-8.187,3.666-8.187,8.188
				c0,8.186,16.372,19.812,16.372,19.812s16.373-12.102,16.373-19.812C168.211,179.586,164.545,175.92,160.025,175.92z"/>
				<path id="heart-2" fill="none" stroke="crimson" strokeWidth="5" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
				M110.025,175.92c-4.522,0-8.188,3.666-8.188,8.188c0-4.521-3.666-8.188-8.186-8.188c-4.522,0-8.186,3.666-8.186,8.188
				c0,8.186,16.372,19.812,16.372,19.812s16.373-12.102,16.373-19.812C118.211,179.586,114.545,175.92,110.025,175.92z"/>
				<path id="heart-3" fill="none" stroke="crimson" strokeWidth="5" strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
				M60.025,175.92c-4.522,0-8.188,3.666-8.188,8.188c0-4.521-3.666-8.188-8.186-8.188c-4.522,0-8.186,3.666-8.186,8.188
				c0,8.186,16.372,19.812,16.372,19.812s16.373-12.102,16.373-19.812C68.21,179.586,64.545,175.92,60.025,175.92z"/>
			</g>
		);
	}
});

export default HeartsComponent;