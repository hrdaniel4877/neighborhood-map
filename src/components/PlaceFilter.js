import React from 'react'

function PlaceFilter (props) {
	return (
		<input
			type="text" 
			placeholder="Filter locations..."
			value={props.queryValue} 
			onClick={props.onInputClick} 
			onChange={props.onQueryChange}
		/>
	)
}

export default PlaceFilter
