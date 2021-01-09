import React, { Component } from 'react';
import '../App.css';

class SearchResult extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Title: this.props.Title,
            Year: this.props.Year,
            imdbID: this.props.imdbID,
            Key: this.props.Key
        };
    }

    render(){
        return(
            <div className="movieFoundCard" key={this.props.Key}>
                <div className="leftSide">
                    <div className="movieTitle">
                        {this.state.Title}
                    </div>
                    <div className="movieYear">
                        ({this.state.Year})
                    </div>
                </div>
                <div className="rightSide">
                    <button>
                        Nominate
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchResult;