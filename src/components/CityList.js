import React from 'react'
import PlaceFilter from './PlaceFilter'
import escregexp from 'escape-regexp'

function CityList (props) {
	
	const expression = new RegExp(escregexp(props.query).toLowerCase().trim())

	return (
		<ul className='list'>
			<PlaceFilter className='search'
				queryValue={props.query}
				onInputClick={props.onInputClick}
				onQueryChange={props.onQueryChange}
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
