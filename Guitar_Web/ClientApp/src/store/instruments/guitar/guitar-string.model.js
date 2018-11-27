import { KeyUtilities } from '../../music/key.model'

export const GuitarString = (function () {
    const GuitarString = function (key, fretCount) {
        this.key = key;
        this.frets = new Array(fretCount).fill().map((_val, index) => {
            return KeyUtilities.createFromKey(key, index);
        })
    }
    return GuitarString;
})();