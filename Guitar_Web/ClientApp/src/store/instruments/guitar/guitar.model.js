export const Guitar = (function () {
    const Guitar = function(tuning) {
        this.tuning = tuning;
        this.strings = tuning.getStrings();
    }
    return Guitar;
})();