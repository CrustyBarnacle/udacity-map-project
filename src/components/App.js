import React, { Component } from "react";
import Features from "./Features";
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
        <Features
                venues={this.venues}
                mapCenter={this.mapCenter}
                parameters={this.parameters}
                />
        <MyMap />
      </main>
    );
  }
}

export default App
