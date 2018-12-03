import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../../store/stores/active/guitar'

const FretComponent = props => {

console.log(props.guitar);

    const inScale = props.guitar.scale.isInScale(props.fret, props.guitar.key)
    const isRoot = props.guitar.scale.isRoot(props.fret, props.guitar.key)
    const interval = props.guitar.scale.getInterval(props.fret, props.guitar.key);
    const scaleVisible = props.guitar.visibility.scale;
    const rootVisible = props.guitar.visibility.root;

    const onClick = () => {
        console.log(props.fret);
    }

    const style = {
        width: props.width + '%',
        height: props.height + 'px',
        lineHeight: props.height + 'px'
    };

    const classes = [
        { cName: 'fret', condition: true },
        { cName: 'in-scale', condition: inScale && scaleVisible },
        { cName: 'root', condition: isRoot && rootVisible },
        { cName: 'third', condition: interval === 3 },
        { cName: 'thith', condition: interval === 5 },
        { cName: 'first', condition: props.first },
        { cName: 'last', condition: props.last },
    ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');



    return (<span className={classes} tooltip={interval} onClick={onClick} style={style}>{props.fret.note}</span>
    )
}

export default connect(
    state => ({ guitar: state.active.guitar }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FretComponent);