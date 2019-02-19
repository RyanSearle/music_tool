export const ChordFinder = (function () {
    
    const getFingering = function (chord, scale, key, guitar) {        
        const getKey = interval => scale.getKeyAtInterval(interval, key);

        var keys = chord.intervals.map(getKey);
        console.log(keys);

        const guitarFrets = guitar.strings.map(s => s.frets);
        
        


        console.log(guitarFrets);

        return [
            { interval: 1, string: 6, fret: 12 },
            { interval: 3, string: 5, fret: 11 },
            { interval: 5, string: 4, fret: 9 },
        ]
    }

    // const getFingeringForSpecificChordOrder = function(chord, guitarFrets) {
    //     const tonic = chord[0];
    //     const remainingNotes = chord.slice(1, chord.length - 1);

    //     const validTonicPositions = findKeyInFrets(tonic, guitarFrets);

    //     validTonicPositions.forEach(rootPosition => {
    //         let nextFound = false;
    //         do {
                
    //         } while (!nextFound);
    //     })

    //     chord.forEach((key, index) => {

            
    //     })



    // }

    // const findKeyInFrets = function(key, guitarFrets) {        
    //     const positions = [];
    //     guitarFrets.forEach((string, stringIndex) => {
    //         string.forEach((fret, fretIndex) => {
    //             if(key.pitch === fret.pitch) {
    //                 positions.push({stringIndex, fretIndex})
    //             }
    //         })
    //     })
    //     return positions;
    // }

    return {
        getFingering
    }
})();