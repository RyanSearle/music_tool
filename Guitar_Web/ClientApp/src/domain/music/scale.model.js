import { Tone, ScaleResolver, Key } from "./key.model";

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

        this.pitches = accumilativeDistances.map(distance => {
            return (rootKey.pitch + distance) % 12
        })

        this.letters = getLetters(rootKey.letter);
    }

    const getLetters = function(startLetter) {
        const rationalScale = ['A','B','C','D','E','F','G'];
        const startIndex = rationalScale.indexOf(startLetter[0]);

        let initialLetters = rationalScale.slice(startIndex, rationalScale.length);
        return initialLetters.concat(rationalScale.slice(0, startIndex));
    }

    Scale.prototype.getTones = function() {
        return this.pitches.map(p => new Tone(p));
    }

    Scale.prototype.getKeys = function() {
        const sharpScale = this.getTones().map((tone, index) => {
            const letter = this.letters[index];
            return tone.getKey(letter, ScaleResolver.SHARPEN);
        })
        const flatScale = this.getTones().map((tone, index) => {
            const letter = this.letters[index];
            return tone.getKey(letter, ScaleResolver.FLATTEN);
        })

        if(this.rootKey.modifier !== 0) {
            return this.rootKey.modifier > 0 ? sharpScale : flatScale;
        }

        const getComplexityValue = (prev, next) => {
            return prev + Math.abs(next.modifier);
        };

        return sharpScale.reduce(getComplexityValue, 0) <= flatScale.reduce(getComplexityValue, 0)
         ? sharpScale : flatScale;
    }

    Scale.prototype.isInScale = function (pitch) {
        return this.pitches.includes(pitch);
    }

    Scale.prototype.getInterval = function (pitch) {
        return this.pitches.indexOf(pitch) + 1;
    }

    Scale.prototype.isRoot = function (pitch) {
        return Boolean(this.getInterval(pitch) === 1);
    }

    Scale.prototype.isGap = function (pitch) {
        return Boolean(this.gaps.includes(this.getInterval(pitch)));
    }

    Scale.prototype.getPitchAtInterval = function(interval) {
        const rationalInterval = interval % 7 || 7;
        const pitch = this.pitches[rationalInterval - 1];
        const octave = Math.floor((interval - 1) / 7)
        console.log({pitch, octave})
        console.log(this.pitches);
        
        return (octave * 12) + pitch;
    }

    Scale.prototype.getTonality = function (pitch) {

        const initialTone = this.getTones().find(t => t.pitch === pitch);
        if(!initialTone) throw new Error('Pitch not in scale');

        const interval = this.getInterval(pitch);
        
        const relativeThirdPitch = this.getPitchAtInterval(2 + interval);
        // const relativeFifthPitch = this.getPitchAtInterval(4 + interval);

        // console.log(relativeThirdPitch)
        // console.log(relativeFifthPitch)

        // const thirdDistance = relativeThirdPitch - pitch
        // const fifthDistance = relativeFifthPitch - pitch;

        // if(thirdDistance === 4 && fifthDistance === 7) {
        //     return 'major';
        // }

        // if(thirdDistance === 3 && fifthDistance === 7) {
        //      return 'minor';
        // }         

        // if(thirdDistance === 3 && fifthDistance === 6) {
        //     return 'diminished';
        // }
        // console.log('thirdDistance', thirdDistance)
        // console.log('fifthDistance', fifthDistance)

        return '';
        throw new Error('Tonality error');
    }

    return Scale;
})();