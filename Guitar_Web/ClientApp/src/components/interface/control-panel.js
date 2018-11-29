import React from 'react';
import './control-panel.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/guitar.store'

const ControlPanel = props => {

    // Keys
    const currentKey = props.active.key;
    const keys = props.collections.keys;

    const changeKey = (e) => {
        const val = e.target.value;
        
        const key = keys.find(k => k.pitch.toString() === val);
        props.changeKey(key);
    }

    // Scales
    const currentScale = props.active.scale;
    const scales = props.collections.scales;

    const changeScale = (e) => {
        const val = e.target.value;
        
        const scale = scales.find(s => s.name === val);
        props.changeScale(scale);
    }

    // Tunings
    const currentTuning = props.active.tuning;
    const tunings = props.collections.tunings;

    const changeTuning = (e) => {
        const val = e.target.value;
        
        const tuning = tunings.find(t => t.name === val);
        props.changeTuning(tuning);
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
    </div>)
}

export default connect(
    state => state.guitar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ControlPanel);