import { Scale } from "./scale.model";
import { keys } from "../configs/music/key.config";

export const ScaleTemplate = (function() {
    const ScaleTemplate = function(name, distances, gaps){
        this.name = name;
        this.distances = distances;
        this.gaps = gaps;
    }

    ScaleTemplate.prototype.createScale = function(tone) {    
        // Get potential keys from config
        const potentialKeys = keys.filter(key => key.tone.pitch === tone.pitch);

        if(potentialKeys.length === 0) throw new Error('not matching keys for tone: ' + tone)

        // Test for lowest complexity
        const key = potentialKeys.reduce((acc, nextKey) => {
            const scaleComplexity = new Scale(nextKey, this.name, this.distances, this.gaps).getComplexity();

            return scaleComplexity <= acc.complexity ? {key: nextKey, complexity: scaleComplexity} : acc;
        }, {complexity: Number.POSITIVE_INFINITY}).key;

        return new Scale(key, this.name, this.distances, this.gaps);
    }

    return ScaleTemplate;
})();