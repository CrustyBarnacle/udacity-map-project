import React, { Component } from "react";
import TourGuide from "./TourGuide"

export class App extends Component {
  render() {
    // const points = map.loadGeoJson('locations.json');
    // <Tour waypoints='points' />

    // if (!this.props.loaded) {
    //   return <div>Loading...</div>;
    // }

    return (
      <main>
        <h1 id="map-heading">Neighborhood Tour</h1>
        <TourGuide />
      </main>
    );
  }
}

export default App
