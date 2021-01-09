import React, { Component } from 'react';
import '../App.css';

class Search extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        let moviesFound = this.props.moviesFound != null ?  this.props.moviesFound : [];
        let searchText = this.props.searchText != null ? this.props.searchText : '';
        let moviesNominatedLength = this.props.moviesNominatedLength;
        let curDisplay = searchText === "" ? "none" : "inline-table"; 
        return(
            <div className="searchedMoviesList"
            style={{display: curDisplay}}
            >
                <div className="subheader">
                Search results for <b>'{searchText}'</b>
                </div>
                {
                    moviesFound.map((movie, index) => {
                        return (
                            <div className="movieFoundCard" key={index}>
                                <div className="leftSide">
                                    <div className="movieTitle">
                                        {movie.Title}
                                    </div>
                                    <div className="movieYear">
                                        ({movie.Year})
                                    </div>
                                </div>
                                {
                                    movie.Nominated == false ?

                                        <button
                                        className="movieFoundCardButton"
                                        onClick = {(e) => {
                                            if(moviesNominatedLength < 5){
                                                this.props.addNomination({
                                                    Title: movie.Title,
                                                    Year: movie.Year,
                                                    imdbID: movie.imdbID
                                                })
                                            } else {
                                                alert("Please remove a movie from your nominations list in order to nominate another movie.")
                                            }
                                        }}
                                        >
                                            Nominate
                                        </button>

                                    :
                                    <button
                                    className="movieFoundCardNominated"
                                    
                                    >
                                        Already Nominated
                                    </button>
                                }
                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Search;