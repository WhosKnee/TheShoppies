import { ADD_NOMINATION, REMOVE_NOMINATION, REMOVE_ALL } from '../constants.js';

export const addNomination = (movie) => {
    const action = {
        type: ADD_NOMINATION,
        movie: movie
    }
    return action;
}

export const removeNomination = (movie) => {
    const action = {
        type: REMOVE_NOMINATION,
        movie: movie
    }
    return action;
}

export const removeAll = () => {
    const action = {
        type: REMOVE_ALL
    }
    return action;
}
