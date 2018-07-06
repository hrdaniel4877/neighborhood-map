import React from 'react'

function CityList (props) {
	return (
		<ul className='list'>
			{props.locations.map(location => {
				return (
					<li
						key={location.title}
					>
						{location.title}
					</li>
				)
			})}
		</ul>
	)
}

export default CityList
