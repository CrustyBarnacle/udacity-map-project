import React, { Component } from "react";
import { Map, GoogleApiWrapper} from "google-maps-react";

import Tour from './Tour'
import Features from "./Features";

const __GAPI_KEY__ = "AIzaSyB1E9XDW32k70wN-VfijTerghnFWLQk0zY";

export class Container extends Component {
  render() {
    const alumrock = {lat: 37.371067, lng: -121.821060};
    // const points = map.loadGeoJson('locations.json');
    // <Tour waypoints='points' />
;
      
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    
    const style = {
        width: '100vw',
        height: 'calc(100vh - 20px)'
    }
    
    return (
        <section id="main">
            <h1>Neighborhood Tour</h1>
            <Map 
                google={this.props.google}
                style={style}
                initialCenter={alumrock}>
                

                <Features visible={true} />
            </Map>
        </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__,
  v: "3.30",
  libraries: ['places', '']
})(Container);
