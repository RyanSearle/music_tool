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

    // Instrument
    const currentInstrument = props.instrument.selected;
    const instruments = props.instruments;

    const changeInstrument = (e) => {
        const val = e.target.value;
        
        const instrument = instruments.find(t => t === val);
        props.instrumentAction.changeInstrument(instrument);
    }

    // Fret Count
    const currentFretCount = props.instrument.fretCount;    

    const changeFretCount = (e) => {
        const val = parseInt(e.target.value, 10);

        if(val >= 12 && val <= 30) {
            props.actions.changeFretCount(val);
        }
    }


    return (<div className="control-panel">

        {/* Instruments */}
        <div className="control">
            <label>Instrument</label>
            <select onChange={changeInstrument} value={currentInstrument}>
                {instruments.map(instrument => {
                    return (<option key={instrument} value={instrument}>{instrument}</option>)
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

        {/* Fret Count */}
        <div className="control">
            <label>Fret Count</label>
            <input type="number" onChange={changeFretCount}  defaultValue={currentFretCount}/>
        </div>

    </div>)
}

export default InstrumentPanel;