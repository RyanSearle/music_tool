import React from 'react';

const FretComponent = props => {

    const inScale = props.music.scale.isInScale(props.fret, props.music.key)
    const isRoot = props.music.scale.isRoot(props.fret, props.music.key)
    const interval = props.music.scale.getInterval(props.fret, props.music.key);
    const scaleVisible = props.music.visibility.scale;
    const rootVisible = props.music.visibility.root;
    const thirdVisible = props.music.visibility.third;
    const fifthVisible = props.music.visibility.fifth;

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
        { cName: 'third', condition: interval === 3 && thirdVisible },
        { cName: 'fifth', condition: interval === 5 && fifthVisible },
        { cName: 'first', condition: props.first },
        { cName: 'last', condition: props.last },
    ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');



    return (<span className={classes} tooltip={interval} onClick={onClick} style={style}>{props.fret.note}</span>
    )
}

export default FretComponent;