import * as Guitar from './guitar';
import * as Bass from './bass';
import * as Music from './music';

// Add active store initial state here
const initialState = {
    instrument: {
        selected: 'guitar',
        guitar:  Guitar.initialState,
        bass: Bass.initialState
    },
    music: Music.initialState
};

// Add active store action creators here
export const actionCreators = {
    instrument: {
        guitar: Guitar.actionCreators,
        bass: Bass.actionCreators
    },
    music: Music.actionCreators
};

export const reducer = (state, action) => {
    state = state || initialState;
    
    // Add active store reducers here
    const newState = {
        instrument: {
            selected: 'guitar',
            guitar: Guitar.reducer(state.instrument.guitar, action),
            bass: Bass.reducer(state.instrument.bass, action)
        },
        music: Music.reducer(state.music, action)
    }
    console.log('Active Store:', newState);
    return newState;
};
