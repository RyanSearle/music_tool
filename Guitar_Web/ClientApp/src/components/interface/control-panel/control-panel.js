import React from 'react';
import './control-panel.scss';

const ControlPanel = props => {

    // Keys
    const currentKey = props.instrument.key;
    const keys = props.collections.music.keys;

    const changeKey = (e) => {
        const val = e.target.value;
        
        const key = keys.find(k => k.pitch.toString() === val);
        props.actions.changeKey(key);
    }

    // Scales
    const currentScale = props.instrument.scale;
    const scales = props.collections.music.scales;

    const changeScale = (e) => {
        const val = e.target.value;
        
        const scale = scales.find(s => s.name === val);
        props.actions.changeScale(scale);
    }

    // Tunings
    const currentTuning = props.instrument.tuning;
    const tunings = props.collections.instrument.tunings;

    const changeTuning = (e) => {
        const val = e.target.value;
        
        const tuning = tunings.find(t => t.name === val);
        props.actions.changeTuning(tuning);
    }

    // Scale visibility
    const currentScaleVisibility = props.instrument.visibility.scale;

    const changeScaleVisibility = (e) => {
        const val = e.target.checked;
                
        props.actions.changeScaleVisibility(val);
    }

    // Root visibility
    const currentRootVisibility = props.instrument.visibility.root;

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

        {/* Tunings */}
        <div className="control">
            <label>Tuning</label>
            <select onChange={changeTuning} value={currentTuning.name}>
                {tunings.map(tuning => {
                    return (<option key={tuning.name} value={tuning.name}>{tuning.name}</option>)
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

export default ControlPanel;