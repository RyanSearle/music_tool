import { Guitar } from "./instruments/guitar/guitar.model";
import { Tuning } from './instruments/guitar/tuning.model'
import { KeyUtilities } from "./music/key.model";
import { Filter } from './interface/filter.model';
import { DerrivedScale } from './music/scale.model';

const standardTuning = new Tuning([
    KeyUtilities.createFromChar('E', 1),
    KeyUtilities.createFromChar('B', 0),
    KeyUtilities.createFromChar('G', 0),
    KeyUtilities.createFromChar('D', 0),
    KeyUtilities.createFromChar('A', 0),
    KeyUtilities.createFromChar('E', 0),
])

const eMajorScale = new DerrivedScale(['W','W','H','W','W','W','H'], KeyUtilities.createFromChar('E', 0));
const eMajorScaleFilter = new Filter(eMajorScale.rule, console.log)

const initialState = {
    guitar: new Guitar(standardTuning),    
    interface: {
        filters: [eMajorScaleFilter]
    }
};

export const actionCreators = {

};

export const reducer = (state, action) => {
    state = state || initialState;
    console.log('Guitar store: ', state);

    return state;
};
