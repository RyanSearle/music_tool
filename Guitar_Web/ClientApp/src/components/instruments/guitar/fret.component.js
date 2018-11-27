import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../../store/guitar.store'

const FretComponent = props => {

    const activeScale = props.active.scale;
    const inScale = activeScale.isInScale(props.fret, props.active.key)
    const isRoot = activeScale.isRoot(props.fret, props.active.key)
    const interval = activeScale.getInterval(props.fret, props.active.key);

    const log = () => {
        console.log(props.fret);
    }

    const style = {
        display: 'inline-block',
        width: props.width + '%',
        color: inScale ? 'red' : 'black',
        //backgroundColor: isRoot ? 'cyan' : interval === 3 ? 'coral' : interval === 5 ? 'blueviolet' : 'transparent'
    };

    return (<span tooltip={interval} onClick={log} style={style}>----{props.fret.note}----</span>
)}

export default connect(
    state => state.guitar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FretComponent);