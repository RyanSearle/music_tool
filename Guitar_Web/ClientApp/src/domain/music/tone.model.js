import { Key } from "./key.model";

export const Tone = (function (){

    // pitch represents the 0-11 value of the chromatic scale
    const Tone = function(pitch, octave) {
        octave = octave || 0;
        pitch = pitch || 0;

        const units = pitch + (octave * 12);
        this.units = units;
    }

    // Tone.prototype.pitch = getter
    Object.defineProperty(Tone.prototype, "pitch", {
        get: function () {
            return parseInt(this.base12[this.base12.length - 1], 12);
        }
    });

    // Tone.prototype.octave = getter
    Object.defineProperty(Tone.prototype, "octave", {
        get: function () {
            return parseInt(this.base12.slice(0, this.base12.length - 1), 12) || 0;
        }
    });

    // Tone.prototype.base12 = getter
    Object.defineProperty(Tone.prototype, "base12", {
        get: function () {
            return this.units.toString(12);
        }
    });

    Tone.prototype.add = function(tone) {
        const newValue = this.units + tone.units; 
        return new Tone(newValue);
    }

    Tone.prototype.subtract = function(tone) {
        const newValue = this.units - tone.units; 
        return new Tone(newValue);
    }

    Tone.prototype.getKey = function (targetLetter, scaleResolver) {
        return new Key(this, targetLetter, scaleResolver);
    }

    Tone.prototype.getKeyWithScale = function (scale) {
        if(scale.isInScale(this)) {
            return scale.getKeys().find(x => x.tone.pitch === this.pitch)
        }
        return new Key(this);
    }

    return Tone;
})();