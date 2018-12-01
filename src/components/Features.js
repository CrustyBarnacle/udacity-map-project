import React, { Component } from 'react';

class Features extends Component {
    state = {
        visible: true,
        query: ""
    }

    componentDidMount() {
        document.getElementById('search').addEventListener('click', function() {
            console.log('Search new venues...');
          });
    }


    render() {
        return (
            <div className="search-menu" id="search">
                    <form id="search" role="search">
                        <label for="search-input">Neighborhood Tour: </label>
                        <input type="search" id="search-input" name="search" spellcheck="false" placeholder="Location or Address"/>
                        <input value="Search" type="submit" />
                    </form>
            </div>
        );
    }
}

export default Features;