import React from 'react';
import Button from './Button';

const ButtonPanel = () =>
	<div className="buttonPanel">
		<div className="row">
			<Button name="AC" color="#e0e0e0" />
			<Button name="+/-" color="#e0e0e0" />
			<Button name="%" color="#e0e0e0" />
			<Button name="+" />
		</div>
		<div className="row">
			<Button name="7" color="#e0e0e0" />
			<Button name="8" color="#e0e0e0" />
			<Button name="9" color="#e0e0e0" />
			<Button name="X" />
		</div>
		<div className="row">
			<Button name="4" color="#e0e0e0" />
			<Button name="5" color="#e0e0e0" />
			<Button name="6" color="#e0e0e0" />
			<Button name="-" />
		</div>
		<div className="row">
			<Button name="1" color="#e0e0e0" />
			<Button name="2" color="#e0e0e0" />
			<Button name="3" color="#e0e0e0" />
			<Button name="+" />
		</div>
		<div className="row">
			<Button name="0" wide={true} color="#e0e0e0" />
			<Button name="." color="#e0e0e0" />
			<Button name="=" />
		</div>
	</div>;

export default ButtonPanel;
