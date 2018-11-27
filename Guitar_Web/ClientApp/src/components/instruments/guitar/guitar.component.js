import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GuitarString from './string.component';
import { actionCreators } from '../../../store/guitar.store'
import { Guitar } from '../../../store/instruments/guitar/guitar.model';

const GuitarComponent = props => {

    const guitar = new Guitar(props.active.tuning);

    return (
        <div>
            {guitar.strings.map((guitarStr, i) => {
                return <GuitarString key={i} str={guitarStr}></GuitarString>
            })}
        </div>
    )
}

export default connect(
    state => state.guitar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(GuitarComponent);
