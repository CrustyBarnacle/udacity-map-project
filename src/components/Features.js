import React, { Component } from 'react';

class Features extends Component {
    state = {
        visible: this.visible,
        query: ""
    }

    render() {
        return (
            <div className="search-menu" id="search">
                <h1>Search a Neighborhood</h1>
                {this.props.visible &&
                    <form id="search" role="search">
                        <label for="search-input">Location or Address</label>
                        <input type="search" id="search-input" name="search" spellcheck="false" />
                        <input value="Submit" type="submit" />
                    </form>
                }
            </div>
        );
    }
}

export default Features;