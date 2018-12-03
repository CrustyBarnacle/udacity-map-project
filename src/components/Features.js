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

    ListItem(props) {
        return <li>Name: {props.venues}</li>;
    }

    venueNames(props) {
        const listItems = this.props.venues.map((venue) =>
            <this.ListItem
            key={venue.name}
            value={venue.name} />
        );

        return (
            <ul>
                {listItems}
            </ul>
        );
    }


    render() {
        return (
            <div className="search-menu" id="search-container">
                    <form id="search" role="search" onSubmit={this.handleSubmit}>
                        <label htmlFor="search-input">Narrow search:  </label>
                        <input type="search" id="search-input" name="search" spellCheck="false" placeholder="Name or type of food..."
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>
                    </form>
                    {this.venueNames(this.props.venues)}
            </div>
        );
    }
}

export default Features;