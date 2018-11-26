import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GuitarString from './string.component'; 
import { actionCreators } from '../../store/guitar.store'


const GuitarComponent = props => (
    <div>
        {props.guitar.strings.map(guitarStr => {
            return <GuitarString str={guitarStr}></GuitarString>
        })}
    </div>
)

export default connect(
    state => state.guitar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(GuitarComponent);
