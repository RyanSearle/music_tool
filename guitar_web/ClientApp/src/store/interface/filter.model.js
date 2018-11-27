export const Filter = (function() {
    const Filter = function(rule, effect) {
        this.rule = rule;
        this.effect = effect;
    }

    Filter.prototype.dispatch = function(key) {
        const match = this.rule(key);

        if(match && this.effect) {
            this.effect(key);
        }
        return match;
    }

    return Filter;
})();