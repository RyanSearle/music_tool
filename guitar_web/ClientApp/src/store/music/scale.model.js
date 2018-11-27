export const Scale = (function () {

    const Scale = function (name, distances) {
        this.name = name;

        this.distances = distances.map(distance => {
            if (distance === 'H') return 1;
            if (distance === 'W') return 2;
            if(typeof distance === 'string'){
                throw new Error('distance of ' + distance + 'is invalid');
            }
            return distance;
        });

        this.accumilativeDistances = [0];
        const _this = this;
        this.distances.reduce((acc, next, index) => {
            return _this.accumilativeDistances[index + 1] = acc + next;
        }, 0);
    }

    Scale.prototype.isInScale = function (key, rootKey) {
        return this.accumilativeDistances.reduce((acc, next) => {
            return acc || rootKey.getDistanceAbsolute(key) % 12 === next;
        },  null)
    }

    Scale.prototype.getInterval = function (key, rootKey) {

        if(!this.isInScale(key, rootKey)){
            return null;
        }

        return this.accumilativeDistances.reduce((acc, next, index) => {
            return acc ? acc : rootKey.getDistanceAbsolute(key) % 12 === next ? index + 1 : null;
        }, null)
    }

    return Scale;
})();
