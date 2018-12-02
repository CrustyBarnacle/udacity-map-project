import React, { Component } from 'react';

class Features extends Component {
    state = {
        visible: true,
        query: ""
    }


    updateQuery(value) {
        this.setState({
            query: value
        })
    }


    render() {
        return (
            <div className="search-menu" id="search">
                    <form id="search" role="search">
                        <label htmlFor="search-input">Neighborhood Tour: </label>
                        <input type="search" id="search-input" name="search" spellCheck="false" placeholder="Location or Address"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>
                        <input value="Search" type="submit" />
                    </form>
            </div>
        );
    }
}

export default Features;