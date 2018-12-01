import React, { Component } from "react";
import Features from "./Features";
import TourGuide from "./TourGuide" // <====== Renamed Map.js to avoid conflict

export class Container extends Component {
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

export default Container
