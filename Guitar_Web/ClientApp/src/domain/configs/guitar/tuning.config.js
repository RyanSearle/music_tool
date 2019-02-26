import { Tuning } from '../../instruments/guitar/tuning.model';
import { Key } from '../../music/key.model';
import { Tone } from '../../music/tone.model';

const standardTuning = new Tuning('Standard', [
    new Key(new Tone(7), 'E'),
    new Key(new Tone(2), 'B'),
    new Key(new Tone(10), 'G'),
    new Key(new Tone(5), 'D'),
    new Key(new Tone(0), 'A'),
    new Key(new Tone(7), 'E'),
])

const cTuning = new Tuning('C', [
    new Key(new Tone(3), 'C'),
    new Key(new Tone(10), 'G'),
    new Key(new Tone(6), 'D'),
    new Key(new Tone(1), 'A'),
    new Key(new Tone(8), 'F'),
    new Key(new Tone(3), 'C'),
])

const dropDTuning = new Tuning('Drop D', [
    new Key(new Tone(7), 'E'),
    new Key(new Tone(2), 'B'),
    new Key(new Tone(10), 'G'),
    new Key(new Tone(5), 'D'),
    new Key(new Tone(0), 'A'),
    new Key(new Tone(5), 'D'),
])

export const Tunings = {
    standardTuning,
    cTuning,
    dropDTuning
}