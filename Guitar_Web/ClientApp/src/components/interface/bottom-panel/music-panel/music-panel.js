import React from 'react';
import './music-panel.scss';

const MusicPanel = props => {

    // Keys
    const currentKey = props.music.key;
    const keys = props.collections.keys;

    const changeKey = (e) => {
        const val = e.target.value;
        
        const key = keys.find(k => k.pitch.toString() === val);
        props.actions.changeKey(key);
    }

    // Scales
    const currentScale = props.music.scale;
    const scales = props.collections.scales;

    const changeScale = (e) => {
        const val = e.target.value;
        
        const scale = scales.find(s => s.name === val);
        props.actions.changeScale(scale);
    }

    // Scale visibility
    const currentScaleVisibility = props.music.visibility.scale;

    const changeScaleVisibility = (e) => {
        const val = e.target.checked;
                
        props.actions.changeScaleVisibility(val);
    }

    // Root visibility
    const currentRootVisibility = props.music.visibility.root;

    const changeRootVisibility = (e) => {
        const val = e.target.checked;
                
        props.actions.changeRootVisibility(val);
    }

    return (<div className="control-panel">
        {/* Keys */}
        <div className="control">
            <label>Key</label>
            <select onChange={changeKey} value={currentKey.pitch}>
                {keys.map(key => {
                    return (<option key={key.pitch} value={key.pitch}>{key.note}</option>)
                })}
            </select>
        </div>

        {/* Scales */}
        <div className="control">
            <label>Scale</label>
            <select onChange={changeScale} value={currentScale.name}>
                {scales.map(scale => {
                    return (<option key={scale.name} value={scale.name}>{scale.name}</option>)
                })}
            </select>
        </div>

        {/* Scale visibility */}
        <div className="control">
            <label>Scale visible</label>
            <input type="checkbox" onChange={changeScaleVisibility} checked={currentScaleVisibility} />
        </div>

        {/* Root visibility */}
        <div className="control">
            <label>Root visible</label>
            <input type="checkbox" onChange={changeRootVisibility} checked={currentRootVisibility} />
        </div>
    </div>)
}

export default MusicPanel;