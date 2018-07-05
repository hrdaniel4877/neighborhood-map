import React, {Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

class CityMap extends Component {
	render() {
		return (
			<Map
				google={this.props.google} 
				initialCenter={{lat:46.769994, lng:23.589588}} 
				zoom={14} 
			>
			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDh30lryFckQPoY4h0Mp8d1L1bsMh3rQLQ'
})(CityMap)
