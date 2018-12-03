import * as Guitar from './guitar';

// Add active store initial state here
const initialState = {
    instrument: 'Guitar',
    guitar:  Guitar.initialState
};

// Add active store action creators here
export const actionCreators = {
    guitar: Guitar.actionCreators
};

export const reducer = (state, action) => {
    state = state || initialState;
    
    // Add active store reducers here
    const newState = {
        instrument: state.instrument,
        guitar: Guitar.reducer(state.guitar, action)
    }
    console.log('Active Store:', newState);
    return newState;
};
