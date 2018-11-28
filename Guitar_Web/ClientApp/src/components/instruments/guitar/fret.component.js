import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../../store/guitar.store'

const FretComponent = props => {

    const activeScale = props.active.scale;
    const inScale = activeScale.isInScale(props.fret, props.active.key)
    const isRoot = activeScale.isRoot(props.fret, props.active.key)
    const interval = activeScale.getInterval(props.fret, props.active.key);

    const onClick = () => {
        console.log(props.fret);
    }

    const style = {        
        width: props.width + '%',
    };

    const classes = [
        {cName: 'fret', condition: true},
        {cName: 'in-scale', condition: inScale},
        {cName: 'root', condition: isRoot},
        {cName: 'third', condition: interval === 3},
        {cName: 'thith', condition: interval === 5},
    ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');

    return (<span className={classes} tooltip={interval} onClick={onClick} style={style}>{props.fret.note}</span>
)}

export default connect(
    state => state.guitar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FretComponent);