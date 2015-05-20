import React from 'react'

let BulletComponent = React.createClass({

	render: function () {
		var classList;
		if (this.props.shot) {
			classList = "fire";
		} else {
			classList = "";
		}
		
		return (
			<g>
				<path id="bullet" className={classList} fill="none" stroke="#1C69B7" strokeWidth="8" strokeLinecap="round" stroke-miterlimit="10" d="M546.5,152.5
				c0,0-59.685-296.5-122.616-296.5c-46.179,0-128.534,194.581-158.147,268.483"/>
				<path id="bullet-scia" className={classList} fill="none" stroke="#80F0F0" strokeWidth="10" strokeLinecap="" stroke-miterlimit="10" d="M546.5,152.5
				c0,0-59.685-296.5-122.616-296.5c-46.179,0-128.534,194.581-158.147,268.483"/>
			</g>
		);
	}
});

export default BulletComponent;