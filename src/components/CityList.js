import React from 'react'
import PlaceFilter from './PlaceFilter'
import escregex from 'escape-regexp'

function CityList (props) {
	
	const expression = new RegExp(escregex(props.currentQuery).toLowerCase().trim())

	return (
		<ul className='list'>
			<PlaceFilter 
				currentValue={props.currentQuery}
				onInputClick={props.onInputClick}
			/>
			{props.locations.filter(location => {
				return expression.test(location.title.toLowerCase())
			})
			.map(location => {
				return (
					<li
						key={location.title}
						onClick={props.onLocationClick}
					>
						{location.title}
					</li>
				)
			})}
		</ul>		
	)
}

export default CityList
