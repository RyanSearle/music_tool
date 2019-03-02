export const Chord = (function () {
    const Chord = function (intervals) {

        if(intervals.length < 2) throw new Error("A chord must consist of 2 or more notes")

        this.intervals = intervals
    }

    return Chord;
})()