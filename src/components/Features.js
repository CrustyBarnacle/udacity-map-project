import React, { Component } from 'react';

class Features extends Component {
    state = {
        visible: this.visible
    }
    
    render() {
        return (
            <div className="options-box" id="menu">
                    Search Neighborhood
                    <h1>Cool Features!</h1>
                    {this.props.visible &&
                        <input id="toggle-drawing" type="text" placeholder="Location or Address" />
                    }
            </div>
        );
    }
}

export default Features;