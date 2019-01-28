export const StringInstrument = (function () {
    const defaultFretCount = 24;
    const StringInstrument = function(tuning, fretCount) {
        let fretCountCalc = fretCount || defaultFretCount;

        // Account for open string
        fretCountCalc++;

        this.tuning = tuning;
        this.strings = tuning.getStrings(fretCountCalc);
        this.fretCount = fretCountCalc;
    }
    return StringInstrument;
})();