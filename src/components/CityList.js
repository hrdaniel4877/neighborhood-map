import React from 'react'
import PlaceFilter from './PlaceFilter'

function CityList (props) {
	return (
		<ul className='list'>
			<PlaceFilter />
			{props.locations.map(location => {
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
