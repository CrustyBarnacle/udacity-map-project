import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <div class="options-box">
                <h1>Cool Features!</h1>
                <p>
                    Draw a shape to get the size of the area
                <input id="toggle-drawing" type="button" value="Drawing Tools" />
                </p>
            </div>
        );
    }
}

export default Features;