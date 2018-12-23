import { Scale } from '../music/scale.model';
import { ScaleSet } from '../music/scale-sets.model';

const majorSpacing = ['W', 'W', 'H', 'W', 'W', 'W', 'H'];
const dorianSpacing = ['W', 'H', 'W', 'W', 'W', 'H', 'W'];
const phrygianSpacing = ['H', 'W', 'W', 'W', 'H', 'W', 'W'];
const lydianSpacing = ['W', 'W', 'W', 'H', 'W', 'W', 'H'];
const mixolydianSpacing = ['W', 'W', 'H', 'W', 'W', 'H', 'W'];
const minorSpacing = ['W', 'H', 'W', 'W', 'H', 'W', 'W'];
const locrianSpacing = ['H', 'W', 'W', 'H', 'W', 'W', 'W'];

const Scales = {
    // Diatonic scales
    major: new Scale('Diatonic', majorSpacing),
    dorian: new Scale('Diatonic', dorianSpacing),
    phrygian: new Scale('Diatonic', phrygianSpacing),
    lydian: new Scale('Diatonic', lydianSpacing),
    mixolydian: new Scale('Diatonic', mixolydianSpacing),
    minor: new Scale('Diatonic', minorSpacing),
    locrian: new Scale('Diatonic', locrianSpacing),
    // Pentatonic scales
    minorPentatonic: new Scale('Pentatonic', minorSpacing, [2, 6]),
    majorPentatonic: new Scale('Pentatonic', majorSpacing, [4, 7])
}

export const ScaleSets = {
    major: new ScaleSet('Major', [Scales.major, Scales.majorPentatonic]),
    dorian: new ScaleSet('Dorian', [Scales.dorian]),
    phrygian: new ScaleSet('Phrygian', [Scales.phrygian]),
    lydian: new ScaleSet('Lydian', [Scales.lydian]),
    mixolydian: new ScaleSet('Mixolydian', [Scales.mixolydian]),
    minor: new ScaleSet('Minor', [Scales.minor, Scales.minorPentatonic]),
    locrian: new ScaleSet('Locrian', [Scales.locrian])
}