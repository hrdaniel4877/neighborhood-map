import React from 'react'

function PlaceSearch (props) {
	return (
		<input
			type="text" 
			placeholder="Filter locations..."
			value={props.currentValue} 
			onClick={props.onInputClick} 
			onChange={props.onQueryChange}
		/>
	)
}

export default PlaceSearch
