import React, { Component } from "react";
import { Map } from 'google-maps-react';

class MyMap extends Component {
  state = {
    zoom: 14,
    center: {
      lat: 37.774929,
      lng: -122.419416
    }
  };

  render() {
    return (<Map google = {this.props.google} zoom={this.state.zoom}>
        <div>
            <h1>Map Loading...</h1>
        </div>
    </Map>);
  }
}

export default MyMap;
