import { ScaleSets } from '../../../domain/configs/music/scale.config';
import { keys } from '../../../domain/configs/music/key.config';
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
            keys.bFKey,
            keys.bKey,
            keys.cKey,
            keys.cSKey,
            keys.dFKey,
            keys.dKey,
            keys.dSKey,
            keys.eFKey,
            keys.eKey,
            keys.fKey,
            keys.fSKey,
            keys.gFKey,
            keys.gKey,
            keys.gSKey,
            keys.aFKey,
        ]
    }
};

export const reducer = (state, action) => {
    state = state || initialState;
    console.log('Collections store: ', state);
    return state;
};
