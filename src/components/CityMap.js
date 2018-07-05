import React, {Component} from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

class CityMap extends Component {
	render() {

		return (
			<Map
				google={this.props.google} 
				initialCenter={{lat:46.769994, lng:23.589588}} 
				zoom={17} 
			>

			{
				this.props.locations.map(location => {
					return (
						<Marker 
							key={location.id} 
							position={{ lat: location.position.lat, lng: location.position.lng}} 
							title={location.title} 
							animation={this.props.google.maps.Animation.Fo}
			                category={location.category}
			                address={location.address}
			                crossStreet={location.crossStreet}
			                state={location.state}
			                coordinates={location.coordinates}
			                postalCode={location.postalCode}
						/>
					)
				})
			}

			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDh30lryFckQPoY4h0Mp8d1L1bsMh3rQLQ'
})(CityMap)
