import { GuitarString } from './guitar-string.model'

export const Tuning = (function() {
    let Tuning = function(stringTunings) {
        this.stringTunings = stringTunings;
    }

    Tuning.prototype.getStrings = function() {
        return this.stringTunings.map(key => {
            return new GuitarString(key);
        })
    }
    return Tuning;
})();