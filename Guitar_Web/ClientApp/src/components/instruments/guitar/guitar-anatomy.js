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