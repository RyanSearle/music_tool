import { Scales } from './configs/scale.config';
import { keys } from './configs/key.config';
import { Tunings } from "./configs/tuning.config";

const fretCount = 23;

const initialState = {
    active: {
        tuning: Tunings.standardTuning,
        scale: Scales.minorPentatonic,
        key: keys.eKey,
        fretCount: fretCount,
        visibility: {
            scale: true,
            root: true,
        }
    },
    collections: {
        tunings: [
            Tunings.standardTuning,
            Tunings.dropDTuning,
            Tunings.cTuning
        ],
        scales: [
            Scales.majorPentatonic,
            Scales.minorPentatonic,
            Scales.major,
            Scales.dorian,
            Scales.phrygian,
            Scales.lydian,
            Scales.mixolydian,
            Scales.minor,
            Scales.locrian,
        ],
        keys: [
            keys.aKey,
            keys.aSKey,
            keys.bKey,
            keys.cKey,
            keys.cSKey,
            keys.dKey,
            keys.dSKey,
            keys.eKey,
            keys.fKey,
            keys.fSKey,
            keys.gKey,
            keys.gSKey,
        ]
    }
};

const CHANGE_KEY_TYPE = 'CHANGE_KEY_TYPE';
const CHANGE_SCALE_TYPE = 'CHANGE_SCALE_TYPE';
const CHANGE_TUNING_TYPE = 'CHANGE_TUNING_TYPE';
const CHANGE_SCALE_VISIBILITY_TYPE = 'CHANGE_SCALE_VISIBILITY_TYPE';
const CHANGE_ROOT_VISIBILITY_TYPE = 'CHANGE_ROOT_VISIBILITY_TYPE';

export const actionCreators = {
    changeKey: (key) => ({ type: CHANGE_KEY_TYPE, key }),
    changeScale: (scale) => ({ type: CHANGE_SCALE_TYPE, scale }),
    changeTuning: (tuning) => ({ type: CHANGE_TUNING_TYPE, tuning }),
    changeScaleVisibility: (visible) => ({ type: CHANGE_SCALE_VISIBILITY_TYPE, visible }),
    changeRootVisibility: (visible) => ({ type: CHANGE_ROOT_VISIBILITY_TYPE, visible }),
};

export const reducer = (state, action) => {
    state = state || initialState;
    console.log('Guitar store: ', state);

    // CHANGE_KEY_TYPE
    if (action.type === CHANGE_KEY_TYPE) {
        return {
            ...state, active: {
                ...state.active, key: action.key
            }
        }
    }

    // CHANGE_SCALE_TYPE
    if (action.type === CHANGE_SCALE_TYPE) {
        return {
            ...state, active: {
                ...state.active, scale: action.scale
            }
        }
    }

    // CHANGE_TUNING_TYPE
    if (action.type === CHANGE_TUNING_TYPE) {
        return {
            ...state, active: {
                ...state.active, tuning: action.tuning
            }
        }
    }

    // CHANGE_SCALE_VISIBILITY_TYPE
    if (action.type === CHANGE_SCALE_VISIBILITY_TYPE) {
        return {
            ...state, active: {
                ...state.active, visibility: {
                    ...state.active.visibility, scale: action.visible
                }
            }
        }
    }

    // CHANGE_ROOT_VISIBILITY_TYPE
    if (action.type === CHANGE_ROOT_VISIBILITY_TYPE) {
        return {
            ...state, active: {
                ...state.active, visibility: {
                    ...state.active.visibility, root: action.visible
                }
            }
        }
    }

    return state;
};
