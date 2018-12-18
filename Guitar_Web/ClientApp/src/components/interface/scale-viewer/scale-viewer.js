import React from "react";
import { connect } from 'react-redux';
import './scale-viewer.scss';

const ScaleViewer = props => {

    const scale = props.active.music.scale;
    const rootKey = props.active.music.key;
    const keys = scale.getKeys(rootKey);
    const rootVisible = props.active.music.visibility.root;

    const getClasses = (key) => {
        const isRoot = scale.isRoot(key, rootKey);
        const isGap = scale.isGap(key, rootKey);
        const interval = scale.getInterval(key, rootKey);

        return [
            { cName: 'note', condition: true },
            { cName: 'root', condition: isRoot && rootVisible },
            { cName: 'third', condition: interval === 3 },
            { cName: 'fifth', condition: interval === 5 },
            { cName: 'gap', condition: isGap }
        ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');
    }


    return (<div className="intervals">
        {keys.map((k, index) => {
            return (<div key={index} className={getClasses(k)}>{k.note}</div>)
        })}
    </div>)
}

export default connect(
    state => ({ active: state.active })
)(ScaleViewer);