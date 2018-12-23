
export const ScaleSet = (function() {
    const ScaleSet = function(name, scales){
        this.name = name;
        this.scales =scales;
    }

    ScaleSet.prototype.default = function() {
        return this.scales[0];
    }

    return ScaleSet;
})();