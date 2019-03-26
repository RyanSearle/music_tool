export const Key = (function () {

    const chromaticScale = [
        { char: 'A', value: 0  },
        { char: 'A♯', value: 1  },
        { char: 'B', value: 2  },
        { char: 'C', value: 3  },
        { char: 'C♯', value: 4  },
        { char: 'D', value: 5  },
        { char: 'D♯', value: 6  },
        { char: 'E', value: 7  },
        { char: 'F', value: 8  },
        { char: 'F♯', value: 9  },
        { char: 'G', value: 10  },
        { char: 'G♯', value: 11 }
    ]

    const Key = function(tone, targetLetter, scaleResolver) {
        this.tone = tone;

        this.letter = targetLetter;

        const startingPoint = chromaticScale.find(x => x.char === targetLetter) 

        if(!startingPoint) throw new Error('targetLetter not found ' + targetLetter);
        
        switch (scaleResolver) {
            case ScaleResolver.SHARPEN:
                this.modifier = resolveWithSharps(startingPoint.value, tone.pitch);
                break;
            case ScaleResolver.FLATTEN:
                this.modifier = resolveWithFlats(startingPoint.value, tone.pitch);
                break;
            default:
                // If no resolver is defined then use simplest
                const sharp = resolveWithSharps(startingPoint.value, tone.pitch);
                const flat = resolveWithFlats(startingPoint.value, tone.pitch);
                this.modifier = Math.abs(sharp) > Math.abs(flat) ? flat : sharp;
                break;
        }
    }

    Key.prototype.getDisplayCharacter = function() {
        const modifierChar = this.modifier >= 0 ? '♯' : '♭';
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