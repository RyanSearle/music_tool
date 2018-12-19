import Tunings from "../../configs/bass/tuning.config";

export const initialState = {
    tuning: Tunings.standardTuning,
    fretCount: 24
};

const prefix = 'Bass_'
const CHANGE_TUNING_TYPE = prefix + 'CHANGE_TUNING_TYPE';
const CHANGE_FRET_COUNT_TYPE = prefix + 'CHANGE_FRET_COUNT_TYPE';

export const actionCreators = {
    changeTuning: (tuning) => ({ type: CHANGE_TUNING_TYPE, tuning }),
    changeFretCount: (fretCount) => ({ type: CHANGE_FRET_COUNT_TYPE, fretCount }),
};

export const reducer = (state, action) => {

    // CHANGE_TUNING_TYPE
    if (action.type === CHANGE_TUNING_TYPE) {
        return {
            ...state,
            tuning: action.tuning
        }
    }

    // CHANGE_FRET_COUNT_TYPE
    if (action.type === CHANGE_FRET_COUNT_TYPE) {
        return {
            ...state,
            fretCount: action.fretCount
        }
    }

    return state;
};
