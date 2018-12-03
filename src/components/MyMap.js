import React, { Component } from "react";
import Features from './Features';
import axios from 'axios';


const alumrock = { lat: 37.371067, lng: -121.821060 };
const __GAPI_KEY__ = "AIzaSyB1E9XDW32k70wN-VfijTerghnFWLQk0zY";


class MyMap extends Component {
    state = {
        venues: [],
        mapCenter: alumrock,

        venuesParameters: {
            query: "tacos",
            near: "Alum Rock, CA",
            limit: "25",
            client_id: "5OG0BWWMUGOYTPHIGWJS3A3YJSY1FB35UTVBFBS3EUZMFYK1",
            client_secret: "2SF04EW1UB4AN3QTYDQVAA54GQSRO1FFRHH1DFN5FVBJA5FK",
            v: "20181128"
        }
        
    }


    componentDidMount() {
        let parameters = {...this.state.venuesParameters}
        this.getVenues(parameters)
    }


    renderMap = () => {
        scriptLoad("https://maps.googleapis.com/maps/api/js?key=" + __GAPI_KEY__ + "&format=png&style=feature:road|color:0xffffff|visibility:simplified&callback=initMap")
        window.initMap = this.initMap
    }

    // FourSquare API call with endpoint and parameters
    getVenues = (parameters) => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"

        axios.get(endPoint + new URLSearchParams(parameters))
        .then(response => {
            this.setState({
                venues: response.data.response.groups[0].items
            }, this.renderMap()) // Callback (wait) to renderMap until AFTER venues is updated.
        })
        .catch(error => {
            window.alert("FourSquare API ERROR! " + error)
        })
    }

    // Set the parameters for the renderMap() to use
    initMap = () => {

        // Create Map
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: this.mapCenter,
            zoom: 14,
        });

        // Set initial map bounds
        let bounds = new window.google.maps.LatLngBounds();

        // Create InfoWindow
        let infowindow = new window.google.maps.InfoWindow();            

        // Add Markers (bases on FourSquare response)
        this.state.venues.map(foursquareVenue => {

            // Create Marker
            let marker = new window.google.maps.Marker({
                position: {lat: foursquareVenue.venue.location.lat, lng: foursquareVenue.venue.location.lng},
                map: map,
                title: foursquareVenue.venue.name
              });
            
            // Marker clicked
            marker.addListener('click', function() {
                infowindow.setContent(foursquareVenue.venue.name)
            
                // Open InfoWindow
                infowindow.open(map, marker);
            });

            bounds.extend(marker.position); // Add Marker to bounds (to be extended)
        })
        map.fitBounds(bounds); // Expand bounds to fit all Markers
    }

    render() {
        return (
            <div>
                <Features
                parameters={this.state.parameters}
                venues={this.state.venues}
                map={this.map} />
                <div id="map" role="application" aria-label="map">
                </div>
            </div>
        )

    }
}


function scriptLoad(url) {
    let index = window.document.getElementsByTagName('script')[0]
    let script = window.document.createElement('script')
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}


export default MyMap;