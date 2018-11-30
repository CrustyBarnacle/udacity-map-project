import React, { Component } from "react";
import axios from 'axios';


const style = {
    left: '340px',
    width: 'calc(100vw - 340px)',
    height: 'calc(100vh - 35px)'
}

const alumrock = { lat: 37.371067, lng: -121.821060 };
const __GAPI_KEY__ = "AIzaSyB1E9XDW32k70wN-VfijTerghnFWLQk0zY";


class TourGuide extends Component {
    state = {
        venues: [],
        
    }

    componentDidMount() {
        this.getVenues()
        this.renderMap()
    }

    renderMap = () => {
        scriptLoad("https://maps.googleapis.com/maps/api/js?key=" + __GAPI_KEY__ + "&format=png&style=feature:road|color:0xffffff|visibility:simplified&callback=initMap")
        window.initMap = this.initMap  // specify where to find initMap for the callback function
    }

    // FourSquare API call with endpoint and parameters
    getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        let parameters = {
            query: "tacos",
            near: "Alum Rock, CA",
            limit: "10",
            client_id: "5OG0BWWMUGOYTPHIGWJS3A3YJSY1FB35UTVBFBS3EUZMFYK1",
            client_secret: "2SF04EW1UB4AN3QTYDQVAA54GQSRO1FFRHH1DFN5FVBJA5FK",
            v: "20181128"
            
        }

        axios.get(endPoint + new URLSearchParams(parameters))
        .then(response => {
            this.setState({
                venues: response.data.response.groups[0].items
            })
        })
        .catch(error => {
            console.log("ERROR! " + error)
        })
    }

    // Set the parameters for the renderMap() to use
    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: alumrock,
            zoom: 11,
            style: { style }
        });
    }

    render() {
        return (
            <div id="map">
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


export default TourGuide;