export const KeyUtilities = (function () {

    const createFromKey = (startKey, semintones) => {
        let startSemitones = startKey.pitch;
        let startOctave = startKey.octave;

        let finalSemitones = (startSemitones + semintones);

        startSemitones = finalSemitones % 12
        startOctave = startOctave + Math.floor(finalSemitones / 12);

        return new Key(startSemitones, startOctave);
    }

    const createFromChar = (char, octave) => {        
        return new Key(getValueFromChar(char), octave);
    }

    const chromaticScale = [
        { char: 'A', value: 0 },
        { char: 'A#', value: 1 },
        { char: 'B', value: 2 },
        { char: 'C', value: 3 },
        { char: 'C#', value: 4 },
        { char: 'D', value: 5 },
        { char: 'D#', value: 6 },
        { char: 'E', value: 7 },
        { char: 'F', value: 8 },
        { char: 'F#', value: 9 },
        { char: 'G', value: 10 },
        { char: 'G#', value: 11 }
    ]

    const getCharFromValue = (pitch) => {
        let scaleVal = chromaticScale.find(scale => scale.value === pitch)
        if (scaleVal == null) {
            throw new Error('Char from value: '+ pitch +' not found');
        }
        return scaleVal.char;
    }

    const getValueFromChar = (char) => {
        let scaleVal = chromaticScale.find(val => val.char === char)
        if (scaleVal == null) {
            throw new Error('Value from char:' + char + ' not found');
        }        
        return scaleVal.value;
    }

    return {
        createFromKey,
        createFromChar,
        getCharFromValue,
        getValueFromChar
    }
})();




export const Key = (function () {
    const Key = function (pitch, octave) {

        octave = octave || 0;

        this.note = KeyUtilities.getCharFromValue(pitch);
        this.octave = octave;
        this.pitch = pitch;

        this.base12Pitch = octave + pitch.toString(12);
    }

    Key.prototype.getDistance = function(key) {
        return parseInt(this.base12Pitch, 12) - parseInt(key.base12Pitch, 12);
    }

    Key.prototype.getDistanceAbsolute = function(key) {
        return Math.abs(this.getDistance(key))
    }

    return Key;
})();


export const Tone = (function (){

    // pitch represents the 0-11 value of the chromatic scale
    const Tone = function(pitch, octave) {
        this.pitch = pitch;
        this.octave = octave;
    }

    Tone.prototype.getKey = function (targetLetter, scaleResolver) {
        return new Key(this.pitch, targetLetter, scaleResolver);
    }

    return Tone;
})();

export const Key = (function (){

    const rationalScale = [
        { char: 'A', value: 0 },
        { char: 'B', value: 2 },
        { char: 'C', value: 3 },
        { char: 'D', value: 5 },
        { char: 'E', value: 7 },
        { char: 'F', value: 8 },
        { char: 'G', value: 10 },
    ]

    const chromaticScale = [
        { char: 'A', value: 0 },
        { char: 'A#', value: 1 },
        { char: 'B', value: 2 },
        { char: 'C', value: 3 },
        { char: 'C#', value: 4 },
        { char: 'D', value: 5 },
        { char: 'D#', value: 6 },
        { char: 'E', value: 7 },
        { char: 'F', value: 8 },
        { char: 'F#', value: 9 },
        { char: 'G', value: 10 },
        { char: 'G#', value: 11 }
    ]

    const Key = function(pitch, targetLetter, scaleResolver) {

        // If no target letter is provided then use the default chromatic scale
        if(!targetLetter) {
            targetLetter = chromaticScale.find(x => x.value === pitch).char;
        }

        this.letter = targetLetter;

        const letter = rationalScale.find(x => x.char === targetLetter);

        if(!letter) throw new Error('targetLetter not found');

        switch (scaleResolver) {
            case ScaleResolver.SHARPEN:
                this.modifier = resolveWithSharps(letter.value, pitch);
                break;
            case ScaleResolver.FLATTEN:
                this.modifier = resolveWithFlats(letter.value, pitch);
                break;
            default:
                throw new Error('scaleResolver Not Found');
        }
    }

    Key.prototype.getDisplayCharacter = function() {
        const modifierChar = this.modifier >= 0 ? '#' : '♭';
        let toAdd = '';
        for (let index = 0; index < this.modifier; index++) {
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
})();


export const ScaleResolver = {
    SHARPEN: 1,
    FLATTEN: 2
}