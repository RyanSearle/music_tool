import React from 'react';

const FretComponent = props => {

    const scale = props.scale;
    const inScale = scale.isInScale(props.tone)
    const interval = inScale ? scale.getInterval(props.tone) : 0;
    const isGap = scale.isGap(props.tone);        
    const visibility = props.music.visibleIntervals.find(val => val.interval === interval);    

    const key = props.rationalKeys.find(k => k.tone.pitch === props.tone.pitch);

    const style = {
        width: props.width + '%',
        height: props.height + 'vw',
        lineHeight: props.height + 'vw',
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
    
    return (<span className={classes} tooltip={interval} style={style}>
        <div>{inScale ? props.tone.getKeyWithScale(scale).getDisplayCharacter() : key.getDisplayCharacter()}</div>                
        <div className="fret-shadow"></div>
        </span>
    )
}

export default FretComponent;