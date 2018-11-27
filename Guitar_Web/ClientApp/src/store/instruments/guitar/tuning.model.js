import { GuitarString } from './guitar-string.model'

export const Tuning = (function() {
    let Tuning = function(name, stringTunings) {
        this.name = name;
        this.stringTunings = stringTunings;
    }

    Tuning.prototype.getStrings = function() {
        return this.stringTunings.map(key => {
            return new GuitarString(key);
        })
    }
    return Tuning;
})();