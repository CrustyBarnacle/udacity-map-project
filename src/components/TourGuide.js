import React, { Component } from "react";
  //  Set the variables outside the component for global function access and privacy
    const __GAPI_KEY__ = "AIzaSyB1E9XDW32k70wN-VfijTerghnFWLQk0zY";
    const style = {
        left: '340px',
        width: 'calc(100vw - 340px)',
        height: 'calc(100vh - 35px)'
        }
    const alumrock = {lat: 37.371067, lng: -121.821060};


class TourGuide extends Component {

// Draw the map =======================================================
 renderMap = () => {  
    scriptInit("https://maps.googleapis.com/maps/api/js?key="+__GAPI_KEY__+"&callback=initMap")
    window.initMap = this.initMap  // specify where to find initMap for the callback function
    }

// Set the parameters for the renderMap() to use
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
            center: alumrock,  // required parameter
            style: {style},
            zoom: 12           // required parameter
        });
	}

render() {
    	this.renderMap()   // actually draw the map
	return(
		<div id="map">       // required page container for the map
		</div>
		)

}
}

// =========== insert the <script> code into index.html to allow the javascript to run =========
function scriptInit(url) {
  let index = window.document.getElementsByTagName('script')[0]
  let script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script,index)
}  
// ============ end <script> tag insertion in index.html for js functionality ===============

export default TourGuide