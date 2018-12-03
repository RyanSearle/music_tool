import { Scales } from '../../configs/scale.config';
import { keys } from '../../configs/key.config';
import GuitarTunings from "../../configs/guitar/tuning.config";
import BassTunings from "../../configs/bass/tuning.config";

const initialState = {
    bass: {
        tunings: [
            BassTunings.standardTuning
        ],
    },
    guitar: {
        tunings: [
            GuitarTunings.standardTuning,
            GuitarTunings.dropDTuning,
            GuitarTunings.cTuning
        ],
    },
    music: {
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

export const reducer = (state, action) => {
    state = state || initialState;
    console.log('Collections store: ', state);
    return state;
};
