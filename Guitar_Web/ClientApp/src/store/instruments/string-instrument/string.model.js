import { KeyUtilities } from '../../music/key.model'
import { makeArray } from '../../../helpers';

export const String = (function () {
    const String = function (key, fretCount) {
        this.key = key;
        this.frets = makeArray(fretCount).map((_val, index) => {
            return KeyUtilities.createFromKey(key, index);
        })
    }
    return String;
})();