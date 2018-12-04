import { String } from './string.model'

export const Tuning = (function() {
    let Tuning = function(name, stringTunings) {
        this.name = name;
        this.stringTunings = stringTunings;
    }

    Tuning.prototype.getStrings = function(fretCount) {
        return this.stringTunings.map(key => {
            return new String(key, fretCount);
        })
    }
    return Tuning;
})();