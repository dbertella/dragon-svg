import React from 'react'

let CannonComponent = React.createClass({
	render: function () {
		return (
			<g>
			  <path id="cannon" fill="#3D3D3D" d="M280.304,108.693l-14.084-6.12l-0.319,3.474l-16.824,33.895c-1.388,2.188-1.767,4.976-0.764,7.579c1.679,4.364,6.577,6.537,10.94,4.859c2.7-1.039,4.559-3.312,5.189-5.926l12.937-34.479L280.304,108.693z"/>
			  <path className="wheel" fill="none" stroke="#B78D09" strokeWidth="4" stroke-miterlimit="10" d="M281.889,140.678
			  c0-7.307-5.921-13.225-13.225-13.225c-7.305,0-13.226,5.918-13.226,13.225c0,7.305,5.921,13.227,13.226,13.227
			  C275.968,153.904,281.889,147.982,281.889,140.678z"/>
			  <path fill="none" stroke="#B78D09" strokeWidth="4" strokeLinecap="round" stroke-miterlimit="10" d="M225.75,151.25c0,0,3,0,12.25,0s11.076-11.18,30.275-11.18"/>
			</g>
		);
	}
});

export default CannonComponent;