import React from 'react';
import './instrument-panel.scss';

const InstrumentPanel = props => {

    // Tunings
    const currentTuning = props.instrument.tuning;
    const tunings = props.collections.tunings;

    const changeTuning = (e) => {
        const val = e.target.value;
        
        const tuning = tunings.find(t => t.name === val);
        props.actions.changeTuning(tuning);
    }

    return (<div className="control-panel">
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

export default InstrumentPanel;