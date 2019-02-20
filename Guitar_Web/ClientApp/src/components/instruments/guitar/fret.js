import React from 'react';

const onClick = (fret) => {
    console.log(fret);
}

const FretComponent = props => {

    const scale = props.music.scaleTemplate.createScale(props.music.key);
    console.log(scale)
    const inScale = scale.isInScale(props.fret, props.music.key)
    const interval = scale.getInterval(props.fret, props.music.key);
    const isGap = scale.isGap(props.fret, props.music.key);        
    const visibility = props.music.visibleIntervals.find(val => val.interval === interval);
    
    if(props.chordNote) console.log(props.chordNote);

    const style = {
        width: props.width + '%',
        height: props.height + 'px',
        lineHeight: props.height + 'px',
        color: visibility && visibility.active && !isGap ? visibility.color : null
    };

    const classes = [
        { cName: 'fret', condition: true },
        { cName: 'in-scale', condition: inScale },
        { cName: 'visible', condition: visibility && visibility.active},
        { cName: 'root', condition: interval === 1 },
        { cName: 'first', condition: props.first },
        { cName: 'last', condition: props.last },
        { cName: 'in-chord', condition: props.chordNote },
    ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');
    
    return (<span className={classes} tooltip={interval} onClick={() => onClick(props.fret)} style={style}>
        <div>{props.fret.getKeyWithScale(scale).getDisplayCharacter()}</div>
        <div className="fret-shadow"></div>
        </span>
    )
}

export default FretComponent;