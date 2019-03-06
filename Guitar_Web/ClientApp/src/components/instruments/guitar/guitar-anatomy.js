import { makeArray } from "../../../helpers";

// Calculate progressive fret width
const fretRatio = 1.059463;
const scaleLength = 100;
export const getFretWidths = (length, openFretWidth = 2) => {
    let result = [];
    for (let index = 0; index < length; index++) {

        if (index === 0) {
            result.push({ a: openFretWidth, b: scaleLength });
            continue;
        }

        const lg = result[index - 1].b / fretRatio

        result.push({ a: result[index - 1].b - lg, b: lg });
    }
    result = result.map(x => x.a)
    const total = result.reduce((acc, next) => acc + next, 0);
    return result.map(w => (w / total) * 100);
}

// higher the narrower
const narrowFactor = 0.6;
export const getFretHeights = (fretSize, fretCount, stringCount) => {
    return makeArray(fretCount).map((_val, i) => {
        const factor = (narrowFactor / fretCount) * i;
        const toRemove = (factor * fretSize) / stringCount;
        return fretSize - toRemove;
    }).reverse();
}

export const getFretMarkers = () => {
    return [
        { fret: 3, single: true},
        { fret: 5, single: true},
        { fret: 7, single: true},
        { fret: 9, single: true},
        { fret: 12, double: true},
        { fret: 15, single: true},
        { fret: 17, single: true},
        { fret: 19, single: true},
        { fret: 21, single: true},
        { fret: 24, double: true},
    ]
}