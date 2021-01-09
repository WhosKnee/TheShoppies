import React, { Component } from 'react';
import '../App.css';

class Banner extends Component {

    render(){
        let moviesNominatedLength = this.props.moviesNominatedLength;
        return(
            <div 
            id="banner"
            style=
            { 
                moviesNominatedLength >= 5
                ?
                {display:  "block"} 
                :
                {display: "none"}
            
            } 
            >
                <i class="fas fa-film filmIcon"></i>
                &nbsp;
                &nbsp;
                You have nominated the maximum of 5 movies
                &nbsp;
                &nbsp;
                <i class="fas fa-film filmIcon"></i>
            </div>
        )
    }
}

export default Banner;