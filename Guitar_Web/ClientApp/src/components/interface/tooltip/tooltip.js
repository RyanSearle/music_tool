import React from 'react';
import './tooltip.scss';

export const TooltipComponent = props => {

    const scale = props.scale;
    const inScale = scale.isInScale(props.musicKey.tone)
    const interval = scale.getInterval(props.musicKey.tone);
    const isGap = scale.isGap(props.musicKey.tone);     

    const displayValue =  props.visible ? 'inline-block' : 'none';

    const style = {display: displayValue};

    console.log(props.musicKey);
    

    return (<div style={style} className="tooltip-container">
        <div>{props.musicKey.getDisplayCharacter()}</div>
        <div>{inScale ? 'In-Scale' : 'Not In-Scale'}</div>
        {interval ? <div>interval: {interval}</div> : ''}
    </div>)
}

