import React, { Component } from "react";

class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    console.log("Map loading...");
  }

  render() {
    return <div ref="map">Loading map...</div>;
  }
}

export default Map;
