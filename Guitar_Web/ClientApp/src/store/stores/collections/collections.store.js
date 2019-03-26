import { ScaleSets } from '../../../domain/configs/music/scale.config';
import { Tunings as BassTunings } from '../../../domain/configs/bass/tuning.config';
import { Tunings as GuitarTunings } from '../../../domain/configs/guitar/tuning.config';
import { Tones } from '../../../domain/configs/music/tone.config';

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
        scaleSets: ScaleSets,
        tones: Tones
    }
};

export const reducer = (state, action) => {
    state = state || initialState;
    return state;
};
