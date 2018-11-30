import React, { Component } from "react";
import Tour from './Tour'
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
        <Features visible={true} />
        <Tour />
        <TourGuide role="application" aria-label="map" />
      </main>
    );
  }
}

export default Container
