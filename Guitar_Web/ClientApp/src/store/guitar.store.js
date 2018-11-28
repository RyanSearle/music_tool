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

const standardTuning = new Tuning('Standard', [
    KeyUtilities.createFromChar('E', 2),
    KeyUtilities.createFromChar('B', 2),
    KeyUtilities.createFromChar('G', 1),
    KeyUtilities.createFromChar('D', 1),
    KeyUtilities.createFromChar('A', 1),
    KeyUtilities.createFromChar('E', 0)
])

const cTuning = new Tuning('C', [
    KeyUtilities.createFromChar('C', 2),
    KeyUtilities.createFromChar('G', 1),
    KeyUtilities.createFromChar('D#', 1),
    KeyUtilities.createFromChar('A#', 1),
    KeyUtilities.createFromChar('F', 0),
    KeyUtilities.createFromChar('C', 0)
])

const dropDTuning = new Tuning('Drop D', [
    KeyUtilities.createFromChar('E', 2),
    KeyUtilities.createFromChar('B', 2),
    KeyUtilities.createFromChar('G', 1),
    KeyUtilities.createFromChar('D', 1),
    KeyUtilities.createFromChar('A', 1),
    KeyUtilities.createFromChar('D', 0)
])

const majorSpacing = ['W', 'W', 'H', 'W', 'W', 'W', 'H'];
const dorianSpacing = ['W', 'H', 'W', 'W', 'W', 'H', 'W'];
const phrygianSpacing = ['H', 'W', 'W', 'W', 'H', 'W', 'W'];
const lydianSpacing = ['W', 'W', 'W', 'H', 'W', 'W', 'H'];
const mixolydianSpacing = ['W', 'W', 'H', 'W', 'W', 'H', 'W'];
const minorSpacing = ['W', 'H', 'W', 'W', 'H', 'W', 'W'];
const locrianSpacing = ['H', 'W', 'W', 'H', 'W', 'W', 'W'];

const major = new Scale('Ionian (Major)', majorSpacing)
const dorian = new Scale('Dorian', dorianSpacing)
const phrygian = new Scale('Phrygian', phrygianSpacing)
const lydian = new Scale('Lydian', lydianSpacing)
const mixolydian = new Scale('Mixolydian', mixolydianSpacing)
const minor = new Scale('Aeolian (Minor)', minorSpacing)
const locrian = new Scale('Locrian', locrianSpacing)

const minorPentatonic = new Scale('Minor Pentatonic', minorSpacing, [2, 6])
const majorPentatonic = new Scale('Major Pentatonic', majorSpacing, [4, 7])

const fretCount = 25;

const initialState = {
    active: {
        tuning: standardTuning,
        scale: minorPentatonic,
        key: eKey,
        fretCount: fretCount
    },
    collections: {
        tunings: [
            standardTuning,
            dropDTuning,
            cTuning
        ],
        scales: [
            majorPentatonic,
            minorPentatonic,
            major,
            dorian,
            phrygian,
            lydian,
            mixolydian,
            minor,
            locrian,
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

const CHANGE_KEY_TYPE = 'CHANGE_KEY_TYPE';
const CHANGE_SCALE_TYPE = 'CHANGE_SCALE_TYPE';
const CHANGE_TUNING_TYPE = 'CHANGE_TUNING_TYPE';

export const actionCreators = {
    changeKey: (key) => ({type: CHANGE_KEY_TYPE, key}),
    changeScale: (scale) => ({type: CHANGE_SCALE_TYPE, scale}),
    changeTuning: (tuning) => ({type: CHANGE_TUNING_TYPE, tuning})
};

export const reducer = (state, action) => {
    state = state || initialState;
    console.log('Guitar store: ', state);

    // CHANGE_KEY_TYPE
    if(action.type === CHANGE_KEY_TYPE) {
        return {...state, active: {
            ...state.active, key: action.key
        }}
    }

    // CHANGE_SCALE_TYPE
    if(action.type === CHANGE_SCALE_TYPE) {
        return {...state, active: {
            ...state.active, scale: action.scale
        }}
    }

    // CHANGE_TUNING_TYPE
    if(action.type === CHANGE_TUNING_TYPE) {
        return {...state, active: {
            ...state.active, tuning: action.tuning
        }}
    }

    return state;
};
