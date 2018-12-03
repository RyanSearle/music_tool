import { Scales } from '../../configs/scale.config';
import { keys } from '../../configs/key.config';
import Tunings from "../../configs/bass/tuning.config";

export const initialState = {
    tuning: Tunings.standardTuning,
    scale: Scales.minorPentatonic,
    key: keys.eKey,
    fretCount: 23,
    visibility: {
        scale: true,
        root: true,
    }
};

const prefix = 'Bass_'
const CHANGE_KEY_TYPE = prefix + 'CHANGE_KEY_TYPE';
const CHANGE_SCALE_TYPE = prefix + 'CHANGE_SCALE_TYPE';
const CHANGE_TUNING_TYPE = prefix + 'CHANGE_TUNING_TYPE';
const CHANGE_SCALE_VISIBILITY_TYPE = prefix + 'CHANGE_SCALE_VISIBILITY_TYPE';
const CHANGE_ROOT_VISIBILITY_TYPE = prefix + 'CHANGE_ROOT_VISIBILITY_TYPE';

export const actionCreators = {
    changeKey: (key) => ({ type: CHANGE_KEY_TYPE, key }),
    changeScale: (scale) => ({ type: CHANGE_SCALE_TYPE, scale }),
    changeTuning: (tuning) => ({ type: CHANGE_TUNING_TYPE, tuning }),
    changeScaleVisibility: (visible) => ({ type: CHANGE_SCALE_VISIBILITY_TYPE, visible }),
    changeRootVisibility: (visible) => ({ type: CHANGE_ROOT_VISIBILITY_TYPE, visible }),
};

export const reducer = (state, action) => {

    // CHANGE_KEY_TYPE
    if (action.type === CHANGE_KEY_TYPE) {
        return {
            ...state,
            key: action.key
        }
    }

    // CHANGE_SCALE_TYPE
    if (action.type === CHANGE_SCALE_TYPE) {
        return {
            ...state,
            scale: action.scale

        }
    }

    // CHANGE_TUNING_TYPE
    if (action.type === CHANGE_TUNING_TYPE) {
        return {
            ...state,
            tuning: action.tuning
        }
    }

    // CHANGE_SCALE_VISIBILITY_TYPE
    if (action.type === CHANGE_SCALE_VISIBILITY_TYPE) {
        return {
            ...state,
            visibility: {
                ...state.visibility, scale: action.visible
            }
        }
    }

    // CHANGE_ROOT_VISIBILITY_TYPE
    if (action.type === CHANGE_ROOT_VISIBILITY_TYPE) {
        return {
            ...state,
            visibility: {
                ...state.visibility, root: action.visible
            }
        }
    }

    return state;
};
