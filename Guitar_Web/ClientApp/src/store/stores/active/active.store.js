import * as Guitar from './guitar';
import * as Bass from './bass';
import * as Music from './music';


// Add active store initial state here
const initialState = {
    instrument: {
        selected: 'Guitar',
        guitar:  Guitar.initialState,
        bass: Bass.initialState
    },
    music: Music.initialState
};


const CHANGE_INSTRUMENT = 'CHANGE_INSTRUMENT';

const actionCreator = {
    changeInstrument: (instrument) => ({type: CHANGE_INSTRUMENT, instrument})
}

// Add active store action creators here
export const actionCreators = {
    instrument: {        
        general: actionCreator,
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
            selected: state.instrument.selected,
            guitar: Guitar.reducer(state.instrument.guitar, action),
            bass: Bass.reducer(state.instrument.bass, action)
        },
        music: Music.reducer(state.music, action)
    }

    if(action.type === CHANGE_INSTRUMENT){
        newState.instrument.selected = action.instrument;
    }

    return newState;
};
