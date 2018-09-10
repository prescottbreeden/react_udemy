import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
	return (
		<div className="UserOutput">
			<p>
				Username: {props.userName} is Bouncy
			</p>
			<p>
				Rubber Baby Buggy Bumpers
			</p>
		</div>
	);
}


export default useroutput;
