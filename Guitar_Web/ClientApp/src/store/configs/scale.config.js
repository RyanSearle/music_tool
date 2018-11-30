import { Scale } from '../music/scale.model';

const majorSpacing = ['W', 'W', 'H', 'W', 'W', 'W', 'H'];
const dorianSpacing = ['W', 'H', 'W', 'W', 'W', 'H', 'W'];
const phrygianSpacing = ['H', 'W', 'W', 'W', 'H', 'W', 'W'];
const lydianSpacing = ['W', 'W', 'W', 'H', 'W', 'W', 'H'];
const mixolydianSpacing = ['W', 'W', 'H', 'W', 'W', 'H', 'W'];
const minorSpacing = ['W', 'H', 'W', 'W', 'H', 'W', 'W'];
const locrianSpacing = ['H', 'W', 'W', 'H', 'W', 'W', 'W'];

export const Scales = {
    // Diatonic scales
    major: new Scale('Ionian (Major)', majorSpacing),
    dorian: new Scale('Dorian', dorianSpacing),
    phrygian: new Scale('Phrygian', phrygianSpacing),
    lydian: new Scale('Lydian', lydianSpacing),
    mixolydian: new Scale('Mixolydian', mixolydianSpacing),
    minor: new Scale('Aeolian (Minor)', minorSpacing),
    locrian: new Scale('Locrian', locrianSpacing),
    // Pentatonic scales
    minorPentatonic: new Scale('Minor Pentatonic', minorSpacing, [2, 6]),
    majorPentatonic: new Scale('Major Pentatonic', majorSpacing, [4, 7])
}