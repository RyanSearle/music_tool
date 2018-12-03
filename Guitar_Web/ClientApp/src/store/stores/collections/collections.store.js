import { Scales } from '../../configs/scale.config';
import { keys } from '../../configs/key.config';
import { Tunings } from "../../configs/tuning.config";

const initialState = {
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
};

export const reducer = (state, action) => {
    state = state || initialState;
    console.log('Collections store: ', state);
    return state;
};
