import { ScaleSets } from '../../configs/scale.config';
import { keys } from '../../configs/key.config';

export const initialState = {
    scaleSet: ScaleSets.major,
    scale: ScaleSets.major.scales[0],
    key: keys.eKey,
    visibleIntervals: [
        {interval: 1, color: '#cc24ff'},
        {interval: 2, color: '#ff00bb'},
        {interval: 3, color: '#00ffff'},
        {interval: 4, color: '#ee5522'},
        {interval: 5, color: '#ffa500'},
        {interval: 6, color: '#aaff00'},
        {interval: 7, color: '#44f5a0'},
    ]
};

const CHANGE_KEY_TYPE = 'CHANGE_KEY_TYPE';
const CHANGE_SCALE_TYPE = 'CHANGE_SCALE_TYPE';
const CHANGE_SCALE_SET_TYPE = 'CHANGE_SCALE_SET_TYPE';
const ADD_INTERVAL_VISIBILITY_TYPE = 'ADD_INTERVAL_VISIBILITY_TYPE'; 
const REMOVE_INTERVAL_VISIBILITY_TYPE = 'REMOVE_INTERVAL_VISIBILITY_TYPE'; 

export const actionCreators = {
    changeKey: (key) => ({ type: CHANGE_KEY_TYPE, key }),
    changeScale: (scale) => ({ type: CHANGE_SCALE_TYPE, scale }),
    changeScaleSet: (scaleSet) => ({ type: CHANGE_SCALE_SET_TYPE, scaleSet }),
    addIntervalVisibility: (interval) => ({ type: ADD_INTERVAL_VISIBILITY_TYPE, interval }),
    removeIntervalVisibility: (interval, color) => ({ type: REMOVE_INTERVAL_VISIBILITY_TYPE, interval, color })
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

    // ADD_INTERVAL_VISIBILITY_TYPE
    if(action.type === ADD_INTERVAL_VISIBILITY_TYPE) {
        return {
            ...state,
            visibleIntervals: [...state.visibleIntervals, {interval: action.interval, color: action.color}]
        }
    }

    // REMOVE_INTERVAL_VISIBILITY_TYPE
    if(action.type === REMOVE_INTERVAL_VISIBILITY_TYPE) {
        return {
            ...state,
            visibleIntervals: state.visibleIntervals.filter(val => val.interval !== action.interval)
        }
    }

    return state;
};
