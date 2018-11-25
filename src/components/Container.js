import React, { Component } from "react";
import { GoogleApiWrapper} from "google-maps-react";

import MyMap from "./Map";

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
      <div style={style}>
          <div class="options-box">
              <h1>Cool Features!</h1>
              <p>
                  Draw a shape to get the size of the area
              <input id="toggle-drawing" type="button" value="Drawing Tools" />
              </p>
          </div>
        <MyMap google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container);
