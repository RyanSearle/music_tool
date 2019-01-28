import { ScaleSets } from '../../configs/scale.config';
import { keys } from '../../configs/key.config';
import { ChordSets } from '../../configs/chord.config';

export const initialState = {
    chord: ChordSets.triads.standard,
    scaleSet: ScaleSets.major,
    scale: ScaleSets.major.scales[0],
    key: keys.eKey,
    visibleIntervals: [
        {interval: 1, color: '#ff00aa', active: true},
        {interval: 2, color: '#cc24ff', active: true},
        {interval: 3, color: '#ee5522', active: true},
        {interval: 4, color: '#ffa500', active: true},
        {interval: 5, color: '#aaff00', active: true},
        {interval: 6, color: '#44f5a0', active: true},
        {interval: 7, color: '#00ffff', active: true},
    ]
};

const CHANGE_KEY_TYPE = 'CHANGE_KEY_TYPE';
const CHANGE_SCALE_TYPE = 'CHANGE_SCALE_TYPE';
const CHANGE_SCALE_SET_TYPE = 'CHANGE_SCALE_SET_TYPE';
const SET_INTERVAL_VISIBILITY_TYPE = 'SET_INTERVAL_VISIBILITY_TYPE'; 

export const actionCreators = {
    changeKey: (key) => ({ type: CHANGE_KEY_TYPE, key }),
    changeScale: (scale) => ({ type: CHANGE_SCALE_TYPE, scale }),
    changeScaleSet: (scaleSet) => ({ type: CHANGE_SCALE_SET_TYPE, scaleSet }),
    setIntervalVisibility: (interval, active) => ({ type: SET_INTERVAL_VISIBILITY_TYPE, interval, active })    
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

    // SET_INTERVAL_VISIBILITY_TYPE
    if(action.type === SET_INTERVAL_VISIBILITY_TYPE) {
        
        const interval = state.visibleIntervals.find(val => val.interval === action.interval);        

        const newInterval = {
            ...interval,
            active: action.active        
        }        

        const newVisibleIntervals = [...state.visibleIntervals.filter(val => val.interval !== action.interval)];
        newVisibleIntervals.push(newInterval);

        return {
            ...state,
            visibleIntervals: newVisibleIntervals
        }
    }

    return state;
};
