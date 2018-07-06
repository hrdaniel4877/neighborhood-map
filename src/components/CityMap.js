import React, {Component} from 'react'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'

class CityMap extends Component {
	
	state = {
	  activeMaker: {},
	  selectedPlace: {},
	  showingInfoWindow: false
	}	

	onMarkerClick = (props, marker, e) => {
	  this.setState({
	    activeMaker: marker,
	    selectedPlace: props,
	    showingInfoWindow: true
	  })
	}

	render() {

		const bound = new this.props.google.maps.LatLngBounds()

	    for (let i = 0; i < this.props.locations.length; i++) {
      		bound.extend(this.props.locations[i].position)
    	}

		return (
			<Map
				google={this.props.google} 
				initialCenter={{lat:46.769994, lng:23.589588}} 
				zoom={17} 
				bounds={bound}
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
                                onClick={this.onMarkerClick}
							/>
						)
					})
				}

				<InfoWindow marker={this.state.activeMaker} visible={this.state.showingInfoWindow}>
					<div>
					    <h2>{this.state.selectedPlace.title}</h2>
					    <h3>{this.state.selectedPlace.category}</h3>
					    <p>Address: {this.state.selectedPlace.address}</p>				    
					    <p>Postal Code: {this.state.selectedPlace.postalCode}</p>
					    <p>Cross Street: {this.state.selectedPlace.crossStreet}</p>
					    <p><em>Info by <a rel="noopener noreferrer" href="https://foursquare.com" target="_blank">Foursquare</a></em></p>
				    </div>
				</InfoWindow>

			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDh30lryFckQPoY4h0Mp8d1L1bsMh3rQLQ'
})(CityMap)
