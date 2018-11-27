import { Tuning } from './instruments/guitar/tuning.model'
import { KeyUtilities } from "./music/key.model";
import { Scale } from './music/scale.model';

const aKey = KeyUtilities.createFromChar('A')
const aSKey = KeyUtilities.createFromChar('A#')
const bKey = KeyUtilities.createFromChar('B')
const cKey = KeyUtilities.createFromChar('C')
const cSKey = KeyUtilities.createFromChar('C#')
const dKey = KeyUtilities.createFromChar('D')
const dSKey = KeyUtilities.createFromChar('D#')
const eKey = KeyUtilities.createFromChar('E')
const fKey = KeyUtilities.createFromChar('F')
const fSKey = KeyUtilities.createFromChar('F#')
const gKey = KeyUtilities.createFromChar('G')
const gSKey = KeyUtilities.createFromChar('G#')

const standardTuning = new Tuning([
    KeyUtilities.createFromChar('E', 1),
    KeyUtilities.createFromChar('B', 0),
    KeyUtilities.createFromChar('G', 0),
    KeyUtilities.createFromChar('D', 0),
    KeyUtilities.createFromChar('A', 0),
    KeyUtilities.createFromChar('E', 0),
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
