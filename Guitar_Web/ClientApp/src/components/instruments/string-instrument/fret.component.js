import React from 'react';

const FretComponent = props => {

    const inScale = props.instrument.scale.isInScale(props.fret, props.instrument.key)
    const isRoot = props.instrument.scale.isRoot(props.fret, props.instrument.key)
    const interval = props.instrument.scale.getInterval(props.fret, props.instrument.key);
    const scaleVisible = props.instrument.visibility.scale;
    const rootVisible = props.instrument.visibility.root;

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

export default FretComponent;