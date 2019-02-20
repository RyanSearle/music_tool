// export const KeyUtilities = (function () {

//     const createFromKey = (startKey, semintones) => {
//         let startSemitones = startKey.pitch;
//         let startOctave = startKey.octave;

//         let finalSemitones = (startSemitones + semintones);

//         startSemitones = finalSemitones % 12
//         startOctave = startOctave + Math.floor(finalSemitones / 12);

//         return new Key(startSemitones, startOctave);
//     }

//     const createFromChar = (char, octave) => {        
//         return new Key(getValueFromChar(char), octave);
//     }

//     const chromaticScale = [
//         { char: 'A', value: 0 },
//         { char: 'A#', value: 1 },
//         { char: 'B', value: 2 },
//         { char: 'C', value: 3 },
//         { char: 'C#', value: 4 },
//         { char: 'D', value: 5 },
//         { char: 'D#', value: 6 },
//         { char: 'E', value: 7 },
//         { char: 'F', value: 8 },
//         { char: 'F#', value: 9 },
//         { char: 'G', value: 10 },
//         { char: 'G#', value: 11 }
//     ]

//     const getCharFromValue = (pitch) => {
//         let scaleVal = chromaticScale.find(scale => scale.value === pitch)
//         if (scaleVal == null) {
//             throw new Error('Char from value: '+ pitch +' not found');
//         }
//         return scaleVal.char;
//     }

//     const getValueFromChar = (char) => {
//         let scaleVal = chromaticScale.find(val => val.char === char)
//         if (scaleVal == null) {
//             throw new Error('Value from char:' + char + ' not found');
//         }        
//         return scaleVal.value;
//     }

//     return {
//         createFromKey,
//         createFromChar,
//         getCharFromValue,
//         getValueFromChar
//     }
// })();




// export const Key = (function () {
//     const Key = function (pitch, octave) {

//         octave = octave || 0;

//         this.note = KeyUtilities.getCharFromValue(pitch);
//         this.octave = octave;
//         this.pitch = pitch;

//         this.base12Pitch = octave + pitch.toString(12);
//     }

//     Key.prototype.getDistance = function(key) {
//         return parseInt(this.base12Pitch, 12) - parseInt(key.base12Pitch, 12);
//     }

//     Key.prototype.getDistanceAbsolute = function(key) {
//         return Math.abs(this.getDistance(key))
//     }

//     return Key;
// })();


export const Tone = (function (){

    // pitch represents the 0-11 value of the chromatic scale
    const Tone = function(pitch) {
        this.pitch = pitch % 12;
    }

    Tone.prototype.getKey = function (targetLetter, scaleResolver) {
        return new Key(this.pitch, targetLetter, scaleResolver);
    }

    return Tone;
})();

export const Key = (function () {

    const chromaticScale = [
        { char: 'A', value: 0, rational: 'A' },
        { char: 'A#', value: 1, rational: 'A' },
        { char: 'B', value: 2, rational: 'B' },
        { char: 'C', value: 3, rational: 'C' },
        { char: 'C#', value: 4, rational: 'C' },
        { char: 'D', value: 5, rational: 'D' },
        { char: 'D#', value: 6, rational: 'D' },
        { char: 'E', value: 7, rational: 'E' },
        { char: 'F', value: 8, rational: 'F' },
        { char: 'F#', value: 9, rational: 'F' },
        { char: 'G', value: 10, rational: 'G' },
        { char: 'G#', value: 11, rational: 'G' }
    ]

    const Key = function(pitch, targetLetter, scaleResolver) {

        pitch = pitch % 12;
        targetLetter = targetLetter || chromaticScale.find(x => x.value === pitch).rational;

        this.pitch = pitch;
        this.letter = targetLetter;

        const startingPoint = chromaticScale.find(x => x.char === targetLetter) 

        if(!startingPoint) throw new Error('targetLetter not found ' + targetLetter);

        switch (scaleResolver) {
            case ScaleResolver.SHARPEN:
                this.modifier = resolveWithSharps(startingPoint.value, pitch);
                break;
            case ScaleResolver.FLATTEN:
                this.modifier = resolveWithFlats(startingPoint.value, pitch);
                break;
            default:
                // If no resolver is defined then use simplest
                const sharp = resolveWithSharps(startingPoint.value, pitch);
                const flat = resolveWithFlats(startingPoint.value, pitch);
                this.modifier = Math.abs(sharp) > Math.abs(flat) ? flat : sharp;
                break;
        }
    }

    Key.prototype.getDisplayCharacter = function() {
        const modifierChar = this.modifier >= 0 ? '#' : '♭';
        let toAdd = '';
        for (let index = 0; index < Math.abs(this.modifier); index++) {
            toAdd = toAdd + modifierChar;
        }

        return `${this.letter}${toAdd}`;
    }

    const resolveWithSharps = function(current, target) {
        if(current === target) return 0;
        if(current > target) {
            current = current - 12;
        }
        return target - current;
    }

    const resolveWithFlats = function(current, target) {
        if(current === target) return 0;
        if(current < target) {
            current = current + 12;
        }
        return target - current;
    }

    return Key;
})();


export const ScaleResolver = {
    SHARPEN: 1,
    FLATTEN: 2
}