import { Chord } from "../../music/chord.model";

// Common Chords: https://music.stackexchange.com/questions/12425/looking-for-a-list-of-common-4-note-chords?noredirect=1&lq=1

export const ChordSets = {
    triads: {
        standard: new Chord([1, 3, 5]),
        firstInversion: new Chord([3, 5, 1]),
        secondInversion: new Chord([5, 1, 3])
    }
}