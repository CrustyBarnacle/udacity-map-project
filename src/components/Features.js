import React, { Component } from 'react';

class Features extends Component {
        state = {
        visible: this.visible
    }
    
    handleClick = () => {
        this.setState = {visible: !this.visible}
    }
    
    render() {
        return (
            <div className="options-box" id="menu">
                <button onClick={this.handleClick.bind(this)}>
                    Search Neighborhood
                    <h1>Cool Features!</h1>
                    {this.visible &&
                        <input id="toggle-drawing" type="text" placeholder="Enter a Location or Address" />
                    }
                </button>
            </div>
        );
    }
}

export default Features;