import React from 'react'

var dragons = [
	{
		name: 'dragon-a',
		path: 'M850.5-90.5c0,0-123-42-271,9s-221,41.193-317,0C171.635-120.49,11.501-82.536,76.501,59.167'
	},
	{
		name: 'dragon-b',
		path: 'M845.5-29.5c0,0-128,0-201-86s-165.051,42.908-248,86s-178.271-4.004-264.751,88.667'
	},
	{
		name: 'dragon-c',
		path: 'M845.5-144.441c0,0-71-12.059-130,23.941s-145-10.5-228-17s-119,34-160,39s-124,1.479-162-8.261S87.021-37.037,94.77,37.881'
	},
	{
		name: 'dragon-d',
		path: 'M845.5-54.25c0,0-64.625-29.875-120,66.75s-132,101.25-214,96.625s-224,29.781-218-132.922S123.27-41.82,123.27,45.34'
	},
	{
		name: 'dragon-e',
		path: 'M831.646-95.646c0,0-134.146,130.146-217.146,91.146s-38-81-8-54S537.27,39.233,478.385,3.867S329.5-24.5,352.5,27.5s69,11.5,56-20.742C398.643-17.69,338-84.001,254.75-54.25S134.354,51.573,132.266,83.506'
	}
];


let DragonComponent = React.createClass({

	render: function () {
		var randomDragonNumber = this.props.randomDragonNumber,
			dragon;
		
		if (randomDragonNumber != null) {
			dragon = <g>
					<path id={ dragons[randomDragonNumber].name } className="fly" fill="none" stroke="#A8240B" strokeWidth="8" strokeLinecap="round" stroke-miterlimit="10" d={dragons[randomDragonNumber].path} />
					<path id={ dragons[randomDragonNumber].name + '-scia'} className="fly" fill="none" stroke="#86FCFF" strokeWidth="15" strokeLinecap="round" stroke-miterlimit="10" d={dragons[randomDragonNumber].path} />
				</g>;
			console.log(dragons[randomDragonNumber].name, randomDragonNumber)
		} else {
			dragon = <g></g>;
			console.log("nullo", randomDragonNumber)

		}

		return dragon;
	}
});

export default DragonComponent;