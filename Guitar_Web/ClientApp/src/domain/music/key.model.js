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