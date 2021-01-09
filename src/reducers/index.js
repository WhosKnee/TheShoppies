import { ADD_NOMINATION, REMOVE_NOMINATION, REMOVE_ALL } from '../constants.js';
import { bake_cookie, read_cookie } from "sfcookies";

const movies = (state = [], action) => {
    let movies = null;
    state = read_cookie("movies");
    
    switch(action.type){
        case ADD_NOMINATION:
            movies = [action.movie, ...state];
            bake_cookie("movies", movies);
            return movies;

        case REMOVE_NOMINATION:
            let i=0;
            while(i < state.length){
                if(state[i].imdbID === action.movie.imdbID){
                    break;
                }
                i++;
            }
            movies = state.slice(0,i).concat(state.slice(i+1, state.length));
            bake_cookie("movies", movies);
            return movies;
        
        case REMOVE_ALL:
            movies = [];
            bake_cookie("movies", movies);
            return movies;

        default:
            return state;
    }
}

export default movies;