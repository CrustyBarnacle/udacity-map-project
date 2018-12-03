import React, { Component } from "react";
// import Features from "./Features";
import MyMap from "./MyMap"

export class App extends Component {
  render() {

    return (
      <main role="main">
        <section id="map-heading">
          <h1>Neighborhood Tour</h1>
        </section>
        <MyMap />
      </main>
    );
  }
}

export default App
