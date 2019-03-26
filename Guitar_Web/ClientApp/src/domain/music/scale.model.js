import { Tone } from "./tone.model";

export const Scale = (function() {

    // Private 
    let gapIntervals = [];

    const Scale = function(type, keys, gaps) {
        this.type = type;
        this.keys = keys;
        this.rootKey = keys[0];
        this.complexity = keys.reduce((acc, key) => acc + Math.abs(key.modifier), 0);

        gapIntervals = gaps || [];
    }
    
    Scale.prototype.isGap = function(tone) {
        return Boolean(gapIntervals.includes(this.getInterval(tone)));
    }

    Scale.prototype.isInScale = function(tone) {
        return this.keys.map(k => k.tone.pitch)
        .filter((p, index) => !gapIntervals.includes(index + 1))
        .includes(tone.pitch);
    }

    Scale.prototype.isRoot = function(tone) {
        return Boolean(this.rootKey.tone.pitch === tone.pitch);
    }

    Scale.prototype.getInterval = function(tone) {
        return this.keys.map(k => k.tone.pitch).indexOf(tone.pitch) + 1;
    }

    Scale.prototype.getTonality = function(tone) {
        const interval = this.getInterval(tone);

        const relativeThirdTone = this.getToneAtInterval(2 + interval);
        const relativeFifthTone = this.getToneAtInterval(4 + interval);

        const thirdDistance = relativeThirdTone.subtract(tone).units;
        const fifthDistance = relativeFifthTone.subtract(tone).units;

        if(thirdDistance === 4 && fifthDistance === 7) {
            return 'major';
        }

        if(thirdDistance === 3 && fifthDistance === 7) {
             return 'minor';
        }         

        if(thirdDistance === 3 && fifthDistance === 6) {
            return 'diminished';
        }

        if(thirdDistance === 4 && fifthDistance === 8) {
            return 'augmented';
        }

        console.log('thirdDistance', thirdDistance)
        console.log('fifthDistance', fifthDistance)

        return 'no-tonality'
    }

    Scale.prototype.getToneAtInterval = function(interval) {
        const rationalInterval = interval % 7 || 7;
        const tone = this.keys.map(k => k.tone)[rationalInterval - 1];
        const octave = Math.floor((interval - 1) / 7)
        return tone.add(new Tone(0, octave));
    }

    return Scale;
})();