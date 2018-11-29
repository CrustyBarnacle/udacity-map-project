import React, { Component } from "react";

    const style = {
        left: '340px',
        width: 'calc(100vw - 340px)',
        height: 'calc(100vh - 35px)'
        }

    const alumrock = {lat: 37.371067, lng: -121.821060};
    const __GAPI_KEY__ = "AIzaSyB1E9XDW32k70wN-VfijTerghnFWLQk0zY";


class TourGuide extends Component {

    renderMap = () => {  
        // eslint-disable-next-line no-multi-str
        scriptLoad("https://maps.googleapis.com/maps/api/js?key="+__GAPI_KEY__+"&format=png& \
        style=feature:road|color:0xffffff|visibility:simplified&callback=initMap")

        window.initMap = this.initMap  // specify where to find initMap for the callback function
        }

    // Set the parameters for the renderMap() to use
    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
                center: alumrock,  // required parameter
                style: {style},
                zoom: 11           // required parameter
            });
        }

    render() {
        this.renderMap()   // actually draw the map
        return(
            <div id="map">
            </div>
        )

    }
}

// =========== insert the <script> code into index.html to allow the javascript to run =========
function scriptLoad(url) {
  let index = window.document.getElementsByTagName('script')[0]
  let script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script,index)
}  
// ============ end <script> tag insertion in index.html for js functionality ===============

export default TourGuide;