import { Chord } from "../music/chord.model";

export const ChordSets = {
    triads: {
        standard: new Chord([1, 3, 5]),
        firstInversion: new Chord([3, 5, 1]),
        secondInversion: new Chord([5, 1, 3])
    }
}