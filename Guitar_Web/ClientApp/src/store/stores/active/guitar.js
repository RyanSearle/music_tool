import Tunings from "../../configs/guitar/tuning.config";

export const initialState = {
    tuning: Tunings.standardTuning,
    fretCount: 23,
};

const prefix = 'Guitar_'
const CHANGE_TUNING_TYPE = prefix + 'CHANGE_TUNING_TYPE';

export const actionCreators = {
    changeTuning: (tuning) => ({ type: CHANGE_TUNING_TYPE, tuning }),
};

export const reducer = (state, action) => {

    // CHANGE_TUNING_TYPE
    if (action.type === CHANGE_TUNING_TYPE) {
        return {
            ...state,
            tuning: action.tuning
        }
    }

    return state;
};
