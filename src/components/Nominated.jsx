import React, { Component } from 'react';
import '../App.css';

class Nominated extends Component {
    render(){
        let moviesNominated = this.props.moviesNominated;
        let margin = "0 0 5% 0"
        if(this.props.curSeachDisplay === "none"){
            margin = "0 auto";
        }
        return (
            <div 
                className="nominatedMoviesList"
                style={{margin: margin}}
            >
                <div className="subheader">
                    Your Nominations
                    {
                        moviesNominated.length > 0 
                        ?
                            <button
                            id="removeAllBtn"
                            onClick= {() => this.props.removeAll()}
                            >
                                Remove All
                            </button>
                        :
                            <button
                            id="removeAllBtn"
                            onClick= {() => this.props.removeAll()}
                            disabled
                            >
                                Remove All
                            </button>

                    }
                   
                </div> 
                    {
                        moviesNominated.map((movie, index) => {
                            return (
                                <div className="movieNominatedCard" key={index}>
                                    <div className="leftSide">
                                        <div className="movieTitle">
                                            {movie.Title}
                                        </div>
                                        <div className="movieYear">
                                            ({movie.Year})
                                        </div>
                                    </div>
                                    <button
                                    className="movieNominatedCardButton"
                                    onClick = {() => this.props.removeNomination({
                                        Title: movie.Title,
                                        Year: movie.Year,
                                        imdbID: movie.imdbID
                                    })}
                                    >
                                        Remove Nomination
                                    </button>
                                </div>
                            )
                        })
                    } 
                </div>  
        )
    }
}

export default Nominated;