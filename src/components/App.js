import React, { Component } from "react";
import MyMap from "./MyMap"

export class App extends Component {
  render() {
    // const points = map.loadGeoJson('locations.json');
    // <Tour waypoints='points' />

    // if (!this.props.loaded) {
    //   return <div>Loading...</div>;
    // }

    return (
      <main role="main">
        <h1 id="map-heading">Neighborhood Tour</h1>
        <MyMap />
      </main>
    );
  }
}

export default App
