export const StringInstrument = (function () {
    const defaultFretCount = 25;
    const StringInstrument = function(tuning, fretCount) {
        const fretCountCalc = fretCount || defaultFretCount;
        this.tuning = tuning;
        this.strings = tuning.getStrings(fretCountCalc);
        this.fretCount = fretCountCalc;
    }
    return StringInstrument;
})();