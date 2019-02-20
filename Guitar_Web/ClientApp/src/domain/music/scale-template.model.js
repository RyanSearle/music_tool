import { Scale } from "./scale.model";

export const ScaleTemplate = (function() {
    const ScaleTemplate = function(name, distances, gaps){
        this.name = name;
        this.distances = distances;
        this.gaps = gaps;
    }

    ScaleTemplate.prototype.createScale = function(root) {
        return new Scale(root, this.name, this.distances, this.gaps);
    }

    return ScaleTemplate;
})();