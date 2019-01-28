export const ChordFinder = (function () {
    
    const getFingering = function (chord, scale, key, guitar) {
        const getKey = interval => scale.getKeyAtInterval(interval, key);

        var keys = chord.intervals.map(getKey);
        console.log(keys);

        
    }

    return {
        getFingering
    }
})();