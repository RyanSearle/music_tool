import { KeyUtilities } from '../../music/key.model'

export const GuitarString = (function () {
    const defaultFretCount = 25;
    const GuitarString = function (key, fretCount) {
        this.key = key;
        this.frets = new Array(fretCount || defaultFretCount).fill().map((_val, index) => {
            return KeyUtilities.createFromKey(key, index);
        })
    }
    return GuitarString;
})();