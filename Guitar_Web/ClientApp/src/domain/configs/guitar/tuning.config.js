import { Tuning } from '../../instruments/guitar/tuning.model';
import { Key } from '../../music/key.model';

const standardTuning = new Tuning('Standard', [
    new Key(7, 'E'),
    new Key(2, 'B'),
    new Key(10, 'G'),
    new Key(5, 'D'),
    new Key(0, 'A'),
    new Key(7, 'E'),
])

const cTuning = new Tuning('C', [
    new Key(3, 'C'),
    new Key(10, 'G'),
    new Key(6, 'D'),
    new Key(1, 'A'),
    new Key(8, 'F'),
    new Key(3, 'C'),
])

const dropDTuning = new Tuning('Drop D', [
    new Key(7, 'E'),
    new Key(2, 'B'),
    new Key(10, 'G'),
    new Key(5, 'D'),
    new Key(0, 'A'),
    new Key(5, 'D'),
])

export const Tunings = {
    standardTuning,
    cTuning,
    dropDTuning
}