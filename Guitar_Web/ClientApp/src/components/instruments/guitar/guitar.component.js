import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './guitar.scss';
import GuitarString from './string.component';
import { actionCreators } from '../../../store/guitar.store'
import { Guitar } from '../../../store/instruments/guitar/guitar.model';

const GuitarComponent = props => {

    const guitar = new Guitar(props.active.tuning, props.active.fretCount);

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
        <div className="guitar">
            <div className="fret-count-row">
                {guitar.strings[0].frets.map((_fret, i) => {
                    return <span className="fret-indicator" key={i} style={fretCountStyle}>{i}</span>
                })}
            </div>
            <div className="fret-board">
                {guitar.strings.map((guitarStr, i) => {
                    return <GuitarString key={i} str={guitarStr} />
                })}
            </div>
        </div>
    )
}

export default connect(
    state => state.guitar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(GuitarComponent);
