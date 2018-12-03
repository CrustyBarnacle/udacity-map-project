import React, { Component } from 'react';

class Features extends Component {
    state = {
        visible: true,
        query: ""
    }


    updateQuery(value) {
        this.setState({
            query: value
        }, this.submitSearch);
    }

    venueNames(props) {
        const listItems = this.props.venues.map((index) =>
            <li
            key={index.venue.id}>
            {index.venue.name.toString()}
            </li>
        );

        return (
            <ul>
                {listItems}
            </ul>
        );
    }


    render() {
        const { venues } = this.props;

        return (
            <div className="search-menu" id="search-container">
                    <form id="search" role="search" onSubmit={this.handleSubmit}>
                        <label htmlFor="search-input">Narrow search:  </label>
                        <input autoFocus type="search" id="search-input" name="search" spellCheck="false" placeholder="Name or type of food..."
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>
                    </form>
                    {this.venueNames(venues)}
            </div>
        );
    }
}

export default Features;