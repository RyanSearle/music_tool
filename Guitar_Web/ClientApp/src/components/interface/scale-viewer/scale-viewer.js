import React from "react";
import { connect } from 'react-redux';
import './scale-viewer.scss';
import { toNumerals } from "../../../helpers";

const ScaleViewer = props => {

    const scale = props.active.music.scale;
    const rootKey = props.active.music.key;
    const keys = scale.getKeys(rootKey);
    const visibility = props.active.music.visibleIntervals;

    const getClasses = (key) => {        
        const isGap = scale.isGap(key, rootKey);
        const interval = scale.getInterval(key, rootKey);
        const isSharp = key.note.length === 2;
        const tonality = scale.getTonality(key, rootKey);        

        return [
            { cName: 'note', condition: true },         
            { cName: 'visible', condition: visibility.some(val => val.interval === interval)},  
            { cName: 'root', condition: interval === 1 },
            // { cName: 'second', condition: interval === 2 },
            // { cName: 'third', condition: interval === 3 },
            // { cName: 'fourth', condition: interval === 4 },
            // { cName: 'fifth', condition: interval === 5 },            
            // { cName: 'sixth', condition: interval === 6 },            
            // { cName: 'seventh', condition: interval === 7 },            
            { cName: 'sharp', condition: isSharp },
            { cName: 'gap', condition: isGap },
            { cName: tonality, condition: true }
        ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');
    }

    const getStyles = (key) => {
        const isGap = scale.isGap(key, rootKey);
        const interval = scale.getInterval(key, rootKey);
        var visibilityObject = visibility.find(val => val.interval === interval);
        return visibilityObject && !isGap ? { color: visibilityObject.color } : null;
    }

    return (<div className="intervals">
        {keys.map((k, index) => {
            return (<div key={index} className={getClasses(k)} style={getStyles(k)}>
                <span>{k.note}</span>
                <div className="chordMajMin">{toNumerals(index + 1)}</div>
            </div>)
        })}
    </div>)
}

export default connect(
    state => ({ active: state.active })
)(ScaleViewer);