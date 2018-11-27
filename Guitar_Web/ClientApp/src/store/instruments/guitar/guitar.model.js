export const Guitar = (function () {
    const defaultFretCount = 25;
    const Guitar = function(tuning, fretCount) {
        const fretCountCalc = fretCount || defaultFretCount;
        this.tuning = tuning;
        this.strings = tuning.getStrings(fretCountCalc);
        this.fretCount = fretCountCalc;
    }
    return Guitar;
})();