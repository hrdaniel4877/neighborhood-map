import React from 'react'

function CityList (props) {
	return (
		<ul className='list'>
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
