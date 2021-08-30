import React from 'react';

const Select = ({options, defaultValue, value, onChange}) => {
	return (
		<div className="margintop">
			<select className="browser-default"
				value={value}
				onChange={event => onChange(event.target.value)}
			>
				<option value="" disabled >{defaultValue}</option>
					{options.map(option =>
					<option key={option.desc} value={option.name}>
						{option.desc}
					</option>
				)}
			</select>
		</div>
	);
};

export default Select;