import { Scales } from '../../configs/scale.config';
import { keys } from '../../configs/key.config';

export const initialState = {
    scale: Scales.minorPentatonic,
    key: keys.eKey,
    visibility: {
        scale: true,
        root: true,
    }
};

const CHANGE_KEY_TYPE = 'CHANGE_KEY_TYPE';
const CHANGE_SCALE_TYPE = 'CHANGE_SCALE_TYPE';
const CHANGE_SCALE_VISIBILITY_TYPE = 'CHANGE_SCALE_VISIBILITY_TYPE';
const CHANGE_ROOT_VISIBILITY_TYPE = 'CHANGE_ROOT_VISIBILITY_TYPE';

export const actionCreators = {
    changeKey: (key) => ({ type: CHANGE_KEY_TYPE, key }),
    changeScale: (scale) => ({ type: CHANGE_SCALE_TYPE, scale }),
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
