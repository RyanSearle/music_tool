export const Filter = (function() {
    const Filter = function(rule, effect) {
        this.rule = rule;
    }

    Filter.prototype.dispatch = function(key, fret) {
        const match = this.rule(key);

        if(match) {
            this.effect(fret);
        }
    }

    return Filter;
})();