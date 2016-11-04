import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        //only use this.state in constructor to modify state
        //in other place, use setState() function
        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        // console.log(event.target.value);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;