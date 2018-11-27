import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GuitarString from './string.component';
import { actionCreators } from '../../../store/guitar.store'
import { Guitar } from '../../../store/instruments/guitar/guitar.model';

const GuitarComponent = props => {

    const guitar = new Guitar(props.active.tuning);

    const fretCount = guitar.strings[0].frets.length;
    const width = 100 / fretCount;

    const fretCountStyle = {
        width: width + '%',
        display: 'inline-block',
        // 'white-space': 'normal'
    }

    const topBar = {
        'white-space': 'nowrap'
    }

    console.log(fretCountStyle.width);
    

    return (
        <div>
            <div style={topBar}>
                {guitar.strings[0].frets.map((_fret, i) => {
                    return <span key={i} style={fretCountStyle}>----{i}----</span>
                })}
            </div>
            <div style={topBar}>
                {guitar.strings.map((guitarStr, i) => {
                    return <GuitarString key={i} str={guitarStr} ></GuitarString>
                })}
            </div>
        </div>
    )
}

export default connect(
    state => state.guitar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(GuitarComponent);
