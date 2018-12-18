import React from "react";
import './instrument-select.scss';
import { actionCreators } from '../../../store/stores/active/active.store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import guitarImg from '../../../images/electric-guitar-music-instrument.svg';
import bassImg from '../../../images/bass-guitar.svg';

const InstrumentSelect = ((props) => {

    const goToPage = page => {
        props.actions.changeInstrument(page);
    }

    const getClasses = route => {
        var classes = [
            'instrument-container'
        ]
        if(props.active.instrument.selected === route) {
            classes.push('active');
        }
        return classes.join(' ');
    }
    
    return (
        <div className='instruments'>
            <div className={getClasses('guitar')} onClick={() => goToPage('guitar')}>
                <img src={guitarImg}></img>
            </div>
            <div className={getClasses('bass')} onClick={() => goToPage('bass')}>        
                <img src={bassImg}></img>
            </div>
        </div>
    )
});

export default connect(
    state => ({ active: state.active }),
    dispatch => ({ actions: bindActionCreators(actionCreators.instrument, dispatch)})
)(InstrumentSelect);