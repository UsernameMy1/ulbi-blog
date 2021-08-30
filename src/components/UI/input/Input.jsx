import React from 'react';

const Input = React.forwardRef((props, ref) => {
	return (
		<div className="input-field col s12">
		<input ref={ref} {...props} className="validate"/>
		</div>
	);
});

export default Input;