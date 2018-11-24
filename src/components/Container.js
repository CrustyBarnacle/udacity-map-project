import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";

import Map from "./Map";

const __GAPI_KEY__ = "AIzaSyB1E9XDW32k70wN-VfijTerghnFWLQk0zY";

export class Container extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container);
