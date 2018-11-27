import { Tuning } from './instruments/guitar/tuning.model'
import { KeyUtilities } from "./music/key.model";
import { Scale } from './music/scale.model';

const aKey = KeyUtilities.createFromChar('A'),
    aSKey = KeyUtilities.createFromChar('A#'),
    bKey = KeyUtilities.createFromChar('B'),
    cKey = KeyUtilities.createFromChar('C'),
    cSKey = KeyUtilities.createFromChar('C#'),
    dKey = KeyUtilities.createFromChar('D'),
    dSKey = KeyUtilities.createFromChar('D#'),
    eKey = KeyUtilities.createFromChar('E'),
    fKey = KeyUtilities.createFromChar('F'),
    fSKey = KeyUtilities.createFromChar('F#'),
    gKey = KeyUtilities.createFromChar('G'),
    gSKey = KeyUtilities.createFromChar('G#')

const standardTuning = new Tuning([
    KeyUtilities.createFromChar('E', 2),
    KeyUtilities.createFromChar('B', 2),
    KeyUtilities.createFromChar('G', 1),
    KeyUtilities.createFromChar('D', 1),
    KeyUtilities.createFromChar('A', 1),
    KeyUtilities.createFromChar('E', 0)
])

const minor = new Scale('Minor', ['W', 'H', 'W', 'W', 'H', 'W', 'W'])
const major = new Scale('Major', ['W', 'W', 'H', 'W', 'W', 'W', 'H'])

const minorPentatonic = new Scale('Minor Pentatonic', [3, 2, 2, 3, 2])
const majorPentatonic = new Scale('Major Pentatonic', [2, 2, 1, 4, 2])

const initialState = {
    active: {
        tuning: standardTuning,
        scale: minorPentatonic,
        key: eKey
    },
    collections: {
        tunings: [
            standardTuning
        ],
        scales: [
            major,
            minor,
            majorPentatonic,
            minorPentatonic
        ],
        keys: [
            aKey,
            aSKey,
            bKey,
            cKey,
            cSKey,
            dKey,
            dSKey,
            eKey,
            fKey,
            fSKey,
            gKey,
            gSKey,
        ]
    }
};

export const actionCreators = {

};

export const reducer = (state, action) => {
    state = state || initialState;
    console.log('Guitar store: ', state);

    return state;
};
