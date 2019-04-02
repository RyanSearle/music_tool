import { Scale } from "./scale.model";
import { keys } from "../configs/music/key.config";
import { Key } from "./key.model";
import { Tone } from "./tone.model";

export const ScaleTemplate = (function() {
    const ScaleTemplate = function(name, distances, gaps){

        distances = distances.map(distance => {
            if (distance === 'H') return 1;
            if (distance === 'W') return 2;
            if(typeof distance === 'string'){
                throw new Error('distance of ' + distance + 'is invalid');
            }
            return distance;
        });

        this.name = name;
        this.distances = distances;
        this.gaps = gaps;
    }

    const getLetters = function(startLetter) {
        const rationalScale = ['A','B','C','D','E','F','G'];
        const startIndex = rationalScale.indexOf(startLetter[0]);

        let initialLetters = rationalScale.slice(startIndex, rationalScale.length);
        return initialLetters.concat(rationalScale.slice(0, startIndex));
    }

    const getKeys = function(tones, letters) {
        return tones.map((tone, index) => {
            const letter = letters[index];
            return new Key(tone, letter);
        })
    }

    const getTones = function(tone, distances) {
        var accumilativeDistances = [0]; 
        distances.reduce((acc, next, index) => {
            return accumilativeDistances[index + 1] = acc + next;
        }, 0);
        accumilativeDistances.pop();

        return accumilativeDistances.map(distance => {
            const octave = Math.floor((tone.pitch + distance) / 12);
            const pitch = (tone.pitch + distance) % 12
            return new Tone(pitch, octave);
        })
    } 
    
    ScaleTemplate.prototype.createScale = function(tone) {    
        // Get potential keys from config
        const potentialKeys = keys.filter(key => key.tone.pitch === tone.pitch);

        if(potentialKeys.length === 0) throw new Error('not matching keys for tone: ' + tone)

        const tones = getTones(tone, this.distances);

        // Test for lowest complexity
        const scale = potentialKeys.reduce((acc, nextKey) => {

            const letters = getLetters(nextKey.letter);
            const keys = getKeys(tones, letters);
            const scale = new Scale(this.name, keys, this.gaps);            

            return scale.complexity <= acc.complexity ? {scale: scale, complexity: scale.complexity} : acc;
        }, {complexity: Number.POSITIVE_INFINITY}).scale;

        return scale;
    }

    return ScaleTemplate;
})();