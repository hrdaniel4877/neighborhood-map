import React from 'react'

function PlaceFilter (props) {
	return (
		<input
			type="text" 
			placeholder="Filter locations..."
			value={props.queryValue} 
			onClick={props.onInputClick} 
			onChange={props.onQueryChange} 
			autofocus="autofocus"
			tabIndex="1"
			aria-label="Type to filter the locations"
		/>
	)
}

export default PlaceFilter
