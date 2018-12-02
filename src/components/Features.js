import React, { Component } from 'react';

class Features extends Component {
    state = {
        visible: true,
        query: ""
    }

    componentDidMount() { // 'click' should be 'keyup'?
        document.getElementById('search').addEventListener('keyup', function() {
            this.setState({
               near: document.getElementById('search').value
            })
          });
    }


    render() {
        return (
            <div className="search-menu" id="search">
                    <form id="search" role="search">
                        <label for="search-input">Neighborhood Tour: </label>
                        <input type="search" id="search-input" name="search" spellcheck="false" placeholder="Location or Address"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>
                        <input value="Search" type="submit" />
                    </form>
            </div>
        );
    }
}

export default Features;