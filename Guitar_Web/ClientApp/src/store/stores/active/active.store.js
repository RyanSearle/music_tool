import * as Guitar from './guitar';
import * as Bass from './bass';

// Add active store initial state here
const initialState = {
    instrument: 'Guitar',
    guitar:  Guitar.initialState,
    bass: Bass.initialState
};

// Add active store action creators here
export const actionCreators = {
    guitar: Guitar.actionCreators,
    bass: Bass.actionCreators
};

export const reducer = (state, action) => {
    state = state || initialState;
    
    // Add active store reducers here
    const newState = {
        instrument: state.instrument,
        guitar: Guitar.reducer(state.guitar, action),
        bass: Bass.reducer(state.bass, action)
    }
    console.log('Active Store:', newState);
    return newState;
};
