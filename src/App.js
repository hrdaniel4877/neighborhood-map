import React, { Component } from 'react'
import CityMap from './components/CityMap'
import CityList from './components/CityList'

class App extends Component {
  state = {
  	locations: [],
  	locationInfo: {},
  	query: ''
  }

  // Fetch locations from Forsquare
  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/explore?ll=46.769994,23.589588&client_id=4FAUYPRHNYTFGNWFK0OCEKJZLZQWK4CH0VZFGJI0Y3OFXWYA&client_secret=TFLXBM4ANRYZOG3XN2BZQN0EADEK20Y4W0LTP5Y2ACXLDM3R&v=20180705')
    .then(response => response.json())
    .then(data => {
      const locations = data.response.groups[0].items.map(item => {
        return {
          position: { lat: item.venue.location.lat, lng: item.venue.location.lng },
          title: item.venue.name,
          id: item.venue.id,
          category: item.venue.categories[0].name,
          address: item.venue.location.address,
          crossStreet: item.venue.location.crossStreet,
          state: item.venue.location.state,
          coordinates: item.venue.location.lat + ', ' + item.venue.location.lng,
          postalCode: item.venue.location.postalCode
        }
      })
      this.setState({ locations });
      console.log(this.state.locations);
    })
    .catch(err => {
      console.log('Foursquare error:', err)
    })  	
  }

  onListItemClick = event => {
  	console.log('Click!');
  	this.setState({
  		query: event.target.textContent
  	})
  	for (const location of this.state.locations) {
  		if (location.title === event.target.textContent) {
  			this.setState({
  				locationInfo: location
  			})
  		}
  	}
  }

  onInputClickk = event => {
  	this.setState({
  		query: ''
  	})
  }

  updateQuery = event => {
  	this.setState({
  		query: event.target.value
  	})
  }

  render() {
    return (
    	<div>
	      <CityList 
	      	locations={this.state.locations}
	      	onLocationClick={this.onListItemClick}
	      	onInputClick={this.onInputClickk}
	      	currentQuery={this.state.query}
	      	onQueryChange={this.updateQuery}
	      />
	      <CityMap 
	      	locations={this.state.locations}
	      	queryText={this.state.query}
	      />    		
    	</div>
    );
  }
}

export default App;
