import { ScaleSets } from '../../configs/scale.config';
import { keys } from '../../configs/key.config';

export const initialState = {
    scaleSet: ScaleSets.major,
    scale: ScaleSets.major.scales[0],
    key: keys.eKey,
    visibility: {
        scale: true,
        root: true,
        third: true,
        fifth: true
    }
};

const CHANGE_KEY_TYPE = 'CHANGE_KEY_TYPE';
const CHANGE_SCALE_TYPE = 'CHANGE_SCALE_TYPE';
const CHANGE_SCALE_SET_TYPE = 'CHANGE_SCALE_SET_TYPE';
const CHANGE_SCALE_VISIBILITY_TYPE = 'CHANGE_SCALE_VISIBILITY_TYPE';
const CHANGE_ROOT_VISIBILITY_TYPE = 'CHANGE_ROOT_VISIBILITY_TYPE';
const CHANGE_THIRD_VISIBILITY_TYPE = 'CHANGE_THIRD_VISIBILITY_TYPE';
const CHANGE_FIFTH_VISIBILITY_TYPE = 'CHANGE_FIFTH_VISIBILITY_TYPE';

export const actionCreators = {
    changeKey: (key) => ({ type: CHANGE_KEY_TYPE, key }),
    changeScale: (scale) => ({ type: CHANGE_SCALE_TYPE, scale }),
    changeScaleSet: (scaleSet) => ({ type: CHANGE_SCALE_SET_TYPE, scaleSet }),
    changeScaleVisibility: (visible) => ({ type: CHANGE_SCALE_VISIBILITY_TYPE, visible }),
    changeRootVisibility: (visible) => ({ type: CHANGE_ROOT_VISIBILITY_TYPE, visible }),
    changeThirdVisibility: (visible) => ({ type: CHANGE_THIRD_VISIBILITY_TYPE, visible }),
    changeFifthVisibility: (visible) => ({ type: CHANGE_FIFTH_VISIBILITY_TYPE, visible }),
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

    // CHANGE_SCALE_TYPE
    if (action.type === CHANGE_SCALE_SET_TYPE) {
        return {
            ...state,
            scaleSet: action.scaleSet

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

    // CHANGE_THIRD_VISIBILITY_TYPE
    if (action.type === CHANGE_THIRD_VISIBILITY_TYPE) {
        return {
            ...state,
            visibility: {
                ...state.visibility, third: action.visible
            }
        }
    }

    // CHANGE_FIFTH_VISIBILITY_TYPE
    if (action.type === CHANGE_FIFTH_VISIBILITY_TYPE) {
        return {
            ...state,
            visibility: {
                ...state.visibility, fifth: action.visible
            }
        }
    }

    return state;
};
