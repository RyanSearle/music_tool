import { makeArray } from '../../../helpers';
import { Tone } from '../../music/key.model';

export const String_ = (function () {
    const String_ = function (key, fretCount) {
        this.key = key;
        this.frets = makeArray(fretCount).map((_val, index) => {
            return new Tone(key.pitch + index)
        })
    }
    return String_;
})();