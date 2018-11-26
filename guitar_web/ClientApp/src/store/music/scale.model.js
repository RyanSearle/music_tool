export const BaseScale = (function () {

    const BaseScale = function (distances) {
        this.distances = distances.map(distance => {
            if (distance === 'H') return 1;
            if (distance === 'W') return 2;
            throw new Error('distance of ' + distance + 'is invalid');
        });

        this.accumilativeDistances = [];
        this.distances.reduce((acc, next, index) => {
            return this.accumilativeDistances[index] = acc + next;
        }, 0);
    }

    BaseScale.prototype.rule = function (rootKey, key) {
        return this.accumilativeDistances.reduce((acc, next, index) => {
            return acc || parseInt(rootKey.base12Pitch, 12) + next === parseInt(key.base12Pitch, 12);
        })
    }

    return BaseScale;
})();

export const DerrivedScale = (function () {
    const DerrivedScale = function(distances, rootKey) {
        this.prototype = new BaseScale(distances);
        this.rootKey = rootKey;
    }

    DerrivedScale.rule = function (key) {
        return this.prototype.rule(this.rootKey, key);
    }

    return DerrivedScale;
})();