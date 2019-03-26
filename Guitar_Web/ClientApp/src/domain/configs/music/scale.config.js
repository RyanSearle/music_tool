import { ScaleSet } from '../../music/scale-sets.model';
import { ScaleTemplate } from '../../music/scale-template.model';

const majorSpacing = ['W', 'W', 'H', 'W', 'W', 'W', 'H'];
const dorianSpacing = ['W', 'H', 'W', 'W', 'W', 'H', 'W'];
const phrygianSpacing = ['H', 'W', 'W', 'W', 'H', 'W', 'W'];
const lydianSpacing = ['W', 'W', 'W', 'H', 'W', 'W', 'H'];
const mixolydianSpacing = ['W', 'W', 'H', 'W', 'W', 'H', 'W'];
const minorSpacing = ['W', 'H', 'W', 'W', 'H', 'W', 'W'];
const locrianSpacing = ['H', 'W', 'W', 'H', 'W', 'W', 'W'];
const harmonicMinorSpacing =  ['W', 'H', 'W', 'W', 'H', 3, 'H'];
const melodicMinorSpacing =  ['W', 'H', 'W', 'W', 'W', 'W', 'H'];
const bluesSpacing =  [3, 'H', 'H', 'H', 'H', 3, 'W'];
const lydianFlat7Spacing = ['W', 'W', 'W', 'H', 'W', 'H', 'W'];

const Scales = {
    // Diatonic scales
    major: new ScaleTemplate('Diatonic', majorSpacing),
    dorian: new ScaleTemplate('Diatonic', dorianSpacing),
    phrygian: new ScaleTemplate('Diatonic', phrygianSpacing),
    lydian: new ScaleTemplate('Diatonic', lydianSpacing),
    mixolydian: new ScaleTemplate('Diatonic', mixolydianSpacing),
    minor: new ScaleTemplate('Diatonic', minorSpacing),
    locrian: new ScaleTemplate('Diatonic', locrianSpacing),
    // Pentatonic scales
    minorPentatonic: new ScaleTemplate('Pentatonic', minorSpacing, [2, 6]),
    majorPentatonic: new ScaleTemplate('Pentatonic', majorSpacing, [4, 7]),
    // Other
    harmonicMinor: new ScaleTemplate('Harmonic', harmonicMinorSpacing),
    melodicMinor: new ScaleTemplate('Melodic', melodicMinorSpacing),
    blues: new ScaleTemplate('Diatonic', bluesSpacing),
    lydianFlat7: new ScaleTemplate('Flat 7', lydianFlat7Spacing),
}

export const ScaleSets = [
    new ScaleSet('Major', [Scales.major, Scales.majorPentatonic]),
    new ScaleSet('Dorian', [Scales.dorian]),
    new ScaleSet('Phrygian', [Scales.phrygian]),
    new ScaleSet('Lydian', [Scales.lydian, Scales.lydianFlat7]),
    new ScaleSet('Mixolydian', [Scales.mixolydian]),
    new ScaleSet('Minor', [Scales.minor, Scales.minorPentatonic, Scales.harmonicMinor, Scales.melodicMinor]),
    new ScaleSet('Locrian', [Scales.locrian]),
    // new ScaleSet('Blues', [Scales.blues])
]