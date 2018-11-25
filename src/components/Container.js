import React, { Component } from "react";
import { GoogleApiWrapper} from "google-maps-react";

import MyMap from "./Map";
import Features from "./Features";

const __GAPI_KEY__ = "AIzaSyB1E9XDW32k70wN-VfijTerghnFWLQk0zY";

export class Container extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    
    const style = {
        width: '100%',
        height: '100%'
    }
    
    return (
      <div>
        <h1 id="map-heading">Neighborhood Tour</h1>
        <Features visible={true}/>
        <MyMap google={this.props.google} style={style}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container);
