import React from 'react';
import './tuning-picker.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/stores/active/active.store';


const TuningPicker = props => {
        
    const activeTuning = props.active.instrument.guitar.tuning;
    const tunings = props.collections.guitar.tunings;

    console.log(tunings)

    const changeTuning = (tuning) => {
        if(tuning === activeTuning) return;
        props.action.changeTuning(tuning);
    }

    return (<div className="controls">
        <div className="tunings">
            {tunings.map((tuning, i) => { 
                return (<div className={tuning === activeTuning ? 'active' : ''} 
                        key={i}
                        onClick={() => changeTuning(tuning)}>
                    {tuning.name}
                    </div>
            )})}
        </div>
    </div>)
}

export default connect(
    state => ({ 
        collections: state.collections, 
        active: state.active
    }),
    dispatch => ({
        action: bindActionCreators(actionCreators.instrument.guitar, dispatch)
    })
)(TuningPicker)