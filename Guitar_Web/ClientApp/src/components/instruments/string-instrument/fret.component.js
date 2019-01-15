import React from 'react';

const onClick = (fret) => {
    console.log(fret);
}

const FretComponent = props => {

    const inScale = props.music.scale.isInScale(props.fret, props.music.key)
    const interval = props.music.scale.getInterval(props.fret, props.music.key);
    const isGap = props.music.scale.isGap(props.fret, props.music.key);    
    const visibility = props.music.visibleIntervals;

    var visibilityObject = visibility.find(val => val.interval === interval);
    const style = {
        width: props.width + '%',
        height: props.height + 'px',
        lineHeight: props.height + 'px',
        color: visibilityObject && !isGap ? visibilityObject.color : null
    };

    const classes = [
        { cName: 'fret', condition: true },
        { cName: 'in-scale', condition: inScale },
        { cName: 'visible', condition: visibility.some(val => val.interval === interval)},  
        // { cName: 'root', condition: interval === 1 },
        // { cName: 'second', condition: interval === 2 },
        // { cName: 'third', condition: interval === 3 },
        // { cName: 'fourth', condition: interval === 4 },
        // { cName: 'fifth', condition: interval === 5 },            
        // { cName: 'sixth', condition: interval === 6 },            
        // { cName: 'seventh', condition: interval === 7 },   
        { cName: 'first', condition: props.first },
        { cName: 'last', condition: props.last },
    ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');
    
    return (<span className={classes} tooltip={interval} onClick={() => onClick(props.fret)} style={style}>
        <div>{props.fret.note}</div>
        <div className="fret-shadow"></div>
        </span>
    )
}

export default FretComponent;