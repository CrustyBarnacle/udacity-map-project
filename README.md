
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Run (with service worker) this application
```
serve -s build
npm run serve
```
And then visit localhost:5000


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Resources
* [FourSquare API Documentation](https://developer.foursquare.com/docs/api)
    - [Venue Recommendations](https://developer.foursquare.com/docs/api/venues/explore)

* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)
    - [Map Markers](https://developers.google.com/maps/documentation/javascript/markers)

* [Snazzy Maps](https://snazzymaps.com) GUI map builder and pre-built map styles.
* Google Maps
    - [Google Maps JavaScript API V3 Reference](https://developers.google.com/maps/documentation/javascript/reference/#MapTypeStyleFeatureType)
    - [Maps Static API](https://developers.google.com/maps/documentation/maps-static/dev-guide)
    - [MapTypeStyleFeatureType](https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyleFeatureType)
    - [Styling Maps](https://developers.google.com/maps/documentation/javascript/styling)
    - [Libraries](https://developers.google.com/maps/documentation/javascript/libraries)

    - Request Libraries to load:
        - load the `google.maps.geometry` library
        
        `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">
</script>`
        - load multiple libraries:

        `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry,places">
    </script> `    


* Location Coordinate Services
     - [Goolge geocode locator](https://google-developers.appspot.com/maps/documentation/utils/geocoder/)
     - [LatLong.net](https://www.latlong.net/) Use with care as accuracy *is not gauranteed.*


* React
    - [Ari Lerner's - Google Maps React Component How-To](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/)
    - [`react-google-maps` package](https://github.com/tomchentw/react-google-maps) Provides a set of React components wrapping underlying Google Maps API instances.


* API-related
    - [Foursquare API](https://developer.foursquare.com/)
    - [Google Maps Street View Service](https://developers.google.com/maps/documentation/javascript/streetview)
    - [ProgrammableWeb's API Directory](https://www.programmableweb.com/category/all/apis)
    - [MediaWikiAPI for Wikipedia](http://www.mediawiki.org/wiki/API:Main_page)
// To-Do - Update README

    Dependencies
    References that you have used
    Brief about important files in your project
    how to run the project in development mode
    how to run the project in production mode.
