import * as Guitar from './guitar';

// Add active store initial state here
const initialState = {
    guitar:  Guitar.initialState
};

// Add active store action creators here
export const actionCreators = {
    guitar: Guitar.actionCreators
};

export const reducer = (state, action) => {
    state = state || initialState;
    
    // Add active store reducers here
    return {
        guitar: Guitar.reducer(state.guitar, action)
    }
};
