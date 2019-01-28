import { ScaleSets } from '../../../domain/configs/scale.config';
import { keys } from '../../../domain/configs/key.config';
import { Tunings as BassTunings } from '../../../domain/configs/bass/tuning.config';
import { Tunings as GuitarTunings } from '../../../domain/configs/guitar/tuning.config';

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
        instruments: [
            'Guitar',
            'Bass'
        ],
        scaleSets: [
            ScaleSets.major,
            ScaleSets.dorian,
            ScaleSets.phrygian,
            ScaleSets.lydian,
            ScaleSets.mixolydian,
            ScaleSets.minor,
            ScaleSets.locrian
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
