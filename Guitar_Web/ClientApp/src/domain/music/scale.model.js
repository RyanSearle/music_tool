import { Tone, ScaleResolver } from "./key.model";

// export const Scale = (function () {

//     const Scale = function (type, distances, gaps) {
//         this.type = type;
//         this.gaps = gaps || [];

//         this.distances = distances.map(distance => {
//             if (distance === 'H') return 1;
//             if (distance === 'W') return 2;
//             if(typeof distance === 'string'){
//                 throw new Error('distance of ' + distance + 'is invalid');
//             }
//             return distance;
//         });

//         this.accumilativeDistances = [0];
//         const _this = this;
//         this.distances.reduce((acc, next, index) => {
//             return _this.accumilativeDistances[index + 1] = acc + next;
//         }, 0);
//     }

//     Scale.prototype.getKeys = function(rootKey) {
//         return this.accumilativeDistances.slice(0, this.accumilativeDistances.length - 1).map(distance => {
//             return KeyUtilities.createFromKey(rootKey, distance);
//         })
//     }

//     Scale.prototype.isInScale = function (key, rootKey) {
//         return this.accumilativeDistances.reduce((acc, next, index) => {

//             // Check if in gap
//             if(this.gaps.includes(index + 1)){
//                 return acc;
//             }

//             return acc || rootKey.getDistanceAbsolute(key) % 12 === next;
//         },  null)
//     }

//     Scale.prototype.getInterval = function (key, rootKey) {
//         return this.accumilativeDistances.reduce((acc, next, index) => {
//             return acc ? acc : rootKey.getDistanceAbsolute(key) % 12 === next ? index + 1 : null;
//         }, null)
//     }

//     Scale.prototype.isRoot = function (key, rootKey) {
//         return Boolean(this.getInterval(key, rootKey) === 1);
//     }

//     Scale.prototype.isGap = function (key, rootKey) {
//         return Boolean(this.gaps.includes(this.getInterval(key, rootKey)));
//     }

//     Scale.prototype.getKeyAtInterval = function(interval, rootKey) {
//         const scaleKeys = this.getKeys(rootKey);

//         if(interval <= scaleKeys.length) return scaleKeys[interval - 1];
        
//         while (interval > scaleKeys.length) {
//             interval = interval - 7;            
//         }

//         return KeyUtilities.createFromKey(scaleKeys[interval - 1], 12);
//     }

//     Scale.prototype.getTonality = function (key, rootKey) {

//         const interval = this.getInterval(key, rootKey);    
        
//         const relativeThird = this.getKeyAtInterval(2 + interval, rootKey);
//         const relativeFifth = this.getKeyAtInterval(4 + interval, rootKey);

//         const thirdDistance = relativeThird.getDistanceAbsolute(key);
//         const fifthDistance = relativeFifth.getDistanceAbsolute(key);

//         if(thirdDistance === 4 && fifthDistance === 7) {
//             return 'major';
//         }

//         if(thirdDistance === 3 && fifthDistance === 7) {
//             return 'minor';
//         }         

//         if(thirdDistance === 3 && fifthDistance === 6) {
//             return 'diminished';
//         }

//         throw new Error('Tonality error');
//     }

//     return Scale;
// })();



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
            return new Tone((rootKey.pitch + distance) % 12);
        })

        this.letters = getLetters(rootKey.letter);
    }

    const getLetters = function(startLetter) {
        const rationalScale = ['A','B','C','D','E','F','G'];
        const startIndex = rationalScale.indexOf(startLetter[0]);

        let initialLetters = rationalScale.slice(startIndex, rationalScale.length);
        return initialLetters.concat(rationalScale.slice(0, startIndex));
    }

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

        const getComplexityValue = (prev, next) => {
            return prev + Math.abs(next.modifier);
        };

        return sharpScale.reduce(getComplexityValue, 0) <= flatScale.reduce(getComplexityValue, 0) ? sharpScale : flatScale;
    }

    Scale.prototype.isInScale = function (tone) {
        return this.getKeys().map(k => k.pitch).includes(tone.pitch);
    }

    Scale.prototype.getInterval = function (tone) {
        return this.getKeys().map(k => k.pitch).indexOf(tone.pitch) + 1;
    }

    Scale.prototype.isRoot = function (tone) {
        return Boolean(this.getInterval(tone) === 1);
    }

    Scale.prototype.isGap = function (tone) {
        return Boolean(this.gaps.includes(this.getInterval(tone)));
    }

    Scale.prototype.getKeyAtInterval = function(interval) {
        const scaleKeys = this.getKeys();

        if(interval <= scaleKeys.length) return scaleKeys[interval - 1];
        
        while (interval > scaleKeys.length) {
            interval = interval - 7;            
        }

        return scaleKeys[interval - 1];
    }

    Scale.prototype.getTonality = function (tone) {

        // const interval = this.getInterval(tone);    
        
        // const relativeThird = this.getKeyAtInterval(2 + interval);
        // const relativeFifth = this.getKeyAtInterval(4 + interval);

        // const thirdDistance = relativeThird.getDistanceAbsolute(key);
        // const fifthDistance = relativeFifth.getDistanceAbsolute(key);

        // if(thirdDistance === 4 && fifthDistance === 7) {
        //     return 'major';
        // }

        // if(thirdDistance === 3 && fifthDistance === 7) {
             return 'minor';
        // }         

        // if(thirdDistance === 3 && fifthDistance === 6) {
        //     return 'diminished';
        // }

        // throw new Error('Tonality error');
    }

    return Scale;
})();