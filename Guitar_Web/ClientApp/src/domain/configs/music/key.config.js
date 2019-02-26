import { Key } from "../../music/key.model";
import { Tone } from "../../music/tone.model";

// import { KeyUtilities } from '../music/key.model'

export const keys = {
    aKey: new Key(new Tone(0), 'A'),
    aSKey: new Key(new Tone(1), 'A'),
    bFKey: new Key(new Tone(1), 'B'),
    bKey: new Key(new Tone(2), 'B'),
    cKey: new Key(new Tone(3), 'C'),
    cSKey: new Key(new Tone(4), 'C'),
    dFKey: new Key(new Tone(4), 'D'),
    dKey: new Key(new Tone(5), 'D'),
    dSKey: new Key(new Tone(6), 'D'),
    eFKey: new Key(new Tone(6), 'E'),
    eKey: new Key(new Tone(7), 'E'),
    fKey: new Key(new Tone(8), 'F'),
    fSKey: new Key(new Tone(9), 'F'),
    gFKey: new Key(new Tone(9), 'G'),
    gKey: new Key(new Tone(10), 'G'),
    gSKey: new Key(new Tone(11), 'G'),
    aFKey: new Key(new Tone(11), 'A'),
}

