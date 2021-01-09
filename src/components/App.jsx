import React, { Component } from 'react';
import '../App.css';
import Search from './Search.jsx';
import Nominated from "./Nominated.jsx";
import Banner from "./Banner.jsx";

import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { addNomination, removeNomination, removeAll } from '../actions'; // importing the aciton methods
import moment from 'moment';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            moviesFound: [],
        }
    }

    updateSearch(searchText) {
        this.setState({searchText: searchText}, () => {
            this.searchMovie();
        });
    }

    searchMovie() {
        let moviesFound = [];
        let moviesNominated = this.props.moviesNominated;
        // make request to collect movies
        let acceptedTitle = this.state.searchText.replace(/\s+/g, '+');
        let FETCH_URL = `http://www.omdbapi.com/?apikey=655069e8&type=movie&s=${acceptedTitle}`;

        fetch(FETCH_URL)
        .then((response) => {
            return response.json();
        })
        .then(json => {
            if(json.Response !== "False" ){
                json.Search.forEach(function(movie){
                    let nominated = false;
                    moviesNominated.forEach(function(nominatedMovie){
                        if(nominatedMovie.imdbID === movie.imdbID){
                            nominated = true;
                        }
                    })
                    moviesFound.push({Title: movie.Title, Year: movie.Year, imdbID: movie.imdbID, Nominated: nominated});
                })
                this.setState({moviesFound: moviesFound});
            } else {
                this.setState({moviesFound: []})
            }
        });
    }

    addNomination = movie => {
        // prevent shake animation
        document.activeElement.blur();
        
        // ensure it cannot be added again
        let moviesFound = this.state.moviesFound;
        let changed = false;
        for(var i=0; i < moviesFound.length; i++){
            if(moviesFound[i].imdbID === movie.imdbID){
                moviesFound[i].Nominated = true;
                changed = true;
                break;
            }
        }
        if(changed === true){
            this.setState({moviesFound: moviesFound});
        }

        // update nominated state
        this.props.addNomination(movie);

    }

    removeNomination = movie => {
        // update searched movies
        let moviesFound = this.state.moviesFound;
        let changed = false;
        for(var i=0; i < moviesFound.length; i++){
            if(moviesFound[i].imdbID === movie.imdbID){
                moviesFound[i].Nominated = false;
                changed = true;
                break;
            }
        }
        if(changed === true){
            this.setState({moviesFound: moviesFound});
        }

        // remove from the nominated list
        this.props.removeNomination(movie);
    }

    removeAll = () => {
        let moviesFound = this.state.moviesFound;
        let changed = false;

        // update searched movies
        this.props.moviesNominated.forEach(function(movie){
            for(var i=0; i < moviesFound.length; i++){
                if(moviesFound[i].imdbID === movie.imdbID){
                    moviesFound[i].Nominated = false;
                    changed = true;
                    break;
                }
            }
        })

        if(changed === true){
            this.setState({moviesFound: moviesFound});
        }

        this.props.removeAll();
    }

    render(){
        return(
            <div className="background">
                <div className="title">
                    The Shoppies
                    <div className="subTitle">
                    Vote a max of 5 movies to be nominated for this year's Shoppies!
                    </div>
                </div>
                <div className="form" id="searchForm">
                    <div className="inputIcons">
                        <i class="fas fa-search"></i>
                        <input
                        id="searchField"
                        className="form-control"
                        placeholder="Search for a movie!"
                        onChange={event => this.updateSearch(event.target.value)}
                        />
                    </div>
                </div>
                <Banner
                moviesNominatedLength={this.props.moviesNominated.length}
                />
                <div id="container">
                    <Search 
                        moviesNominatedLength={this.props.moviesNominated.length}
                        moviesFound={this.state.moviesFound}
                        searchText={this.state.searchText}
                        addNomination={this.addNomination}
                    >
                    </Search>
                    <Nominated 
                        moviesNominated={this.props.moviesNominated}
                        removeNomination={this.removeNomination}
                        removeAll={this.removeAll}
                        curSeachDisplay={this.state.searchText === "" ? "none" : "block"}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        moviesNominated: state
    }
}

export default connect(mapStateToProps, { addNomination, removeNomination, removeAll })(App);