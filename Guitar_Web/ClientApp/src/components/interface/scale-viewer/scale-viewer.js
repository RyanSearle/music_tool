import React from "react";
import { connect } from 'react-redux';
import './scale-viewer.scss';
import { toNumerals } from "../../../helpers";

const ScaleViewer = props => {

    const scale = props.active.music.scale;
    const rootKey = props.active.music.key;
    const keys = scale.getKeys(rootKey);
    const rootVisible = props.active.music.visibility.root;
    const thirdVisible = props.active.music.visibility.third;
    const fifthVisible = props.active.music.visibility.fifth;

    const getClasses = (key) => {
        const isRoot = scale.isRoot(key, rootKey);
        const isGap = scale.isGap(key, rootKey);
        const interval = scale.getInterval(key, rootKey);
        const isSharp = key.note.length === 2;

        const tonality = scale.getTonality(key, rootKey);

        return [
            { cName: 'note', condition: true },
            { cName: 'root', condition: isRoot && rootVisible },
            { cName: 'third', condition: interval === 3 && thirdVisible },
            { cName: 'fifth', condition: interval === 5 && fifthVisible },
            { cName: 'sharp', condition: isSharp },
            { cName: 'gap', condition: isGap },
            { cName: tonality, condition: true }
        ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');
    }


    return (<div className="intervals">
        {keys.map((k, index) => {
            return (<div key={index} className={getClasses(k)}>
                <span>{k.note}</span>
                <div className="chordMajMin">{toNumerals(index + 1)}</div>
            </div>)
        })}
    </div>)
}

export default connect(
    state => ({ active: state.active })
)(ScaleViewer);