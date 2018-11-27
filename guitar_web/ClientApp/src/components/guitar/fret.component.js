import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/guitar.store'

const FretComponent = props => {

    const activeScale = props.active.scale;
    const inScale = activeScale.isInScale(props.fret, props.active.key)

    let highlight = inScale;
    
    return (<span style={{color: highlight ? 'red' : 'black'}}>----{props.fret.note}----</span>
)}

export default connect(
    state => state.guitar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FretComponent);