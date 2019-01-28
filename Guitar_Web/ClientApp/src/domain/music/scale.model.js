import { KeyUtilities } from "./key.model";

export const Scale = (function () {

    const Scale = function (type, distances, gaps) {
        this.type = type;
        this.gaps = gaps || [];

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

    Scale.prototype.getKeys = function(rootKey) {
        return this.accumilativeDistances.slice(0, this.accumilativeDistances.length - 1).map(distance => {
            return KeyUtilities.createFromKey(rootKey, distance);
        })
    }

    Scale.prototype.isInScale = function (key, rootKey) {
        return this.accumilativeDistances.reduce((acc, next, index) => {

            // Check if in gap
            if(this.gaps.includes(index + 1)){
                return acc;
            }

            return acc || rootKey.getDistanceAbsolute(key) % 12 === next;
        },  null)
    }

    Scale.prototype.getInterval = function (key, rootKey) {
        return this.accumilativeDistances.reduce((acc, next, index) => {
            return acc ? acc : rootKey.getDistanceAbsolute(key) % 12 === next ? index + 1 : null;
        }, null)
    }

    Scale.prototype.isRoot = function (key, rootKey) {
        return Boolean(this.getInterval(key, rootKey) === 1);
    }

    Scale.prototype.isGap = function (key, rootKey) {
        return Boolean(this.gaps.includes(this.getInterval(key, rootKey)));
    }

    Scale.prototype.getKeyAtInterval = function(interval, rootKey) {
        const scaleKeys = this.getKeys(rootKey);

        if(interval <= scaleKeys.length) return scaleKeys[interval - 1];
        
        while (interval > scaleKeys.length) {
            interval = interval - 7;            
        }

        return KeyUtilities.createFromKey(scaleKeys[interval - 1], 12);
    }

    Scale.prototype.getTonality = function (key, rootKey) {

        const interval = this.getInterval(key, rootKey);    
        
        const relativeThird = this.getKeyAtInterval(2 + interval, rootKey);
        const relativeFifth = this.getKeyAtInterval(4 + interval, rootKey);

        const thirdDistance = relativeThird.getDistanceAbsolute(key);
        const fifthDistance = relativeFifth.getDistanceAbsolute(key);

        if(thirdDistance === 4 && fifthDistance === 7) {
            return 'major';
        }

        if(thirdDistance === 3 && fifthDistance === 7) {
            return 'minor';
        }         

        if(thirdDistance === 3 && fifthDistance === 6) {
            return 'diminished';
        }

        throw new Error('Tonality error');
    }

    return Scale;
})();