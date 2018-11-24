import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <section class="container">
                <div class="options-box">
                    <h1>Cool Features!</h1>
                    <p>
                        Draw a shape to get the size of the area
                    <input id="toggle-drawing" type="button" value="Drawing Tools" />
                    </p>
                </div>
                <div id="map"></div>
            </section>
        );
    }
}

export default App;