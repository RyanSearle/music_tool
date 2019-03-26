import { ScaleResolver } from "./key.model";
import { Tone } from "./tone.model";

export const Scale = (function () {

    const Scale = function (rootKey, type, distances, gaps) {
        this.type = type;
        this.gaps = gaps || [];
        this.rootKey = rootKey;

        this.distances = distances.map(distance => {
            if (distance === 'H') return 1;
            if (distance === 'W') return 2;
            if(typeof distance === 'string'){
                throw new Error('distance of ' + distance + 'is invalid');
            }
            return distance;
        });

        var accumilativeDistances = [0]; 
        this.distances.reduce((acc, next, index) => {
            return accumilativeDistances[index + 1] = acc + next;
        }, 0);
        accumilativeDistances.pop();

        this.tones = accumilativeDistances.map(distance => {
            const octave = Math.floor((rootKey.tone.pitch + distance) / 12);
            const pitch = (rootKey.tone.pitch + distance) % 12
            return new Tone(pitch, octave);
        })

        this.pitches = this.tones.map(tone => tone.pitch);
        this.letters = getLetters(rootKey.letter);
    }

    const getLetters = function(startLetter) {
        const rationalScale = ['A','B','C','D','E','F','G'];
        const startIndex = rationalScale.indexOf(startLetter[0]);

        let initialLetters = rationalScale.slice(startIndex, rationalScale.length);
        return initialLetters.concat(rationalScale.slice(0, startIndex));
    }

    const getComplexityValue = (prev, next) => {
        return prev + Math.abs(next.modifier);
    };

    Scale.prototype.getKeys = function() {
        const sharpScale = this.tones.map((tone, index) => {
            const letter = this.letters[index];
            return tone.getKey(letter, ScaleResolver.SHARPEN);
        })
        const flatScale = this.tones.map((tone, index) => {
            const letter = this.letters[index];
            return tone.getKey(letter, ScaleResolver.FLATTEN);
        })

        if(this.rootKey.modifier !== 0) {
            return this.rootKey.modifier > 0 ? sharpScale : flatScale;
        }



        return sharpScale.reduce(getComplexityValue, 0) <= flatScale.reduce(getComplexityValue, 0)
         ? sharpScale : flatScale;
    }

    Scale.prototype.getComplexity = function() {
        return this.getKeys().reduce(getComplexityValue, 0);
    }

    Scale.prototype.isInScale = function (tone) {
        return this.pitches
            .filter((p, index) => !this.gaps.includes(index + 1))
            .includes(tone.pitch);
    }

    Scale.prototype.getInterval = function (tone) {
        return this.pitches.indexOf(tone.pitch) + 1;
    }

    Scale.prototype.isRoot = function (tone) {
        return Boolean(this.getInterval(tone) === 1);
    }

    Scale.prototype.isGap = function (tone) {
        return Boolean(this.gaps.includes(this.getInterval(tone)));
    }

    Scale.prototype.getToneAtInterval = function(interval) {
        const rationalInterval = interval % 7 || 7;
        const tone = this.tones[rationalInterval - 1];
        const octave = Math.floor((interval - 1) / 7)
        
        // console.log('octave', octave);
        // console.log('tone.octave', tone.octave);
        // console.log('tone.pitch', tone.pitch);

        return tone.add(new Tone(0, octave));
    }

    Scale.prototype.getTonality = function (tone) {

        const initialTone = this.tones.find(t => t.pitch === tone.pitch);
        if(!initialTone) throw new Error('Pitch not in scale');

        const interval = this.getInterval(initialTone);

        const relativeThirdTone = this.getToneAtInterval(2 + interval);
        const relativeFifthTone = this.getToneAtInterval(4 + interval);

        const thirdDistance = relativeThirdTone.subtract(initialTone).units;
        const fifthDistance = relativeFifthTone.subtract(initialTone).units;

        // console.log('relativeThirdPitch',relativeThirdPitch)
        // console.log('pitch',initialTone.pitch)
        // console.log('octave',initialTone.octave)

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
        throw new Error('Tonality error');
    }

    return Scale;
})();