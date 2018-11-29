import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './guitar.scss';
import GuitarString from './string.component';
import { actionCreators } from '../../../store/guitar.store'
import { Guitar } from '../../../store/instruments/guitar/guitar.model';
import { getFretWidths } from './guitar-anatomy';
import { makeArray } from '../../../helpers';

const GuitarComponent = props => {

    const guitar = new Guitar(props.active.tuning, props.active.fretCount);
    const fretCount = guitar.strings[0].frets.length;
    const widths = getFretWidths(fretCount);

    return (
        <div className="guitar">
            <div className="fret-count-row">
                {makeArray(fretCount).map((_fret, i) => {                       
                    return <span className="fret-indicator" key={i} style={{width: widths[i] + '%'}}>{i}</span>
                })}
            </div>
            <div className="fret-board">
                {guitar.strings.map((guitarStr, i) => {
                    return <GuitarString widths={widths} key={i} str={guitarStr} />
                })}
            </div>
        </div>
    )
}

export default connect(
    state => state.guitar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(GuitarComponent);
