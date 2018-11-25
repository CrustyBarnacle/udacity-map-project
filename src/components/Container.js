import React, { Component } from "react";
import { Map, GoogleApiWrapper} from "google-maps-react";


import Features from "./Features";

const __GAPI_KEY__ = "AIzaSyB1E9XDW32k70wN-VfijTerghnFWLQk0zY";

export class Container extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    
    const style = {
        width: '100vw',
        height: 'calc(100vh - 20px)'
    }
    
    return (
        <Map google={this.props.google} style={style}>
            <Features visible={true}/>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__,
  v: "3.30",
  libraries: ['places']
})(Container);
