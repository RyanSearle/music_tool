import React from "react";
import { connect } from 'react-redux';
import { actionCreators } from '../../../store/stores/active/active.store';
import { bindActionCreators } from 'redux';
import './scale-viewer.scss';
import { toNumerals } from "../../../helpers";

const ScaleViewer = props => {

    const scale = props.active.music.scaleTemplate.createScale(props.active.music.key);
    const keys = scale.getKeys();
    const visibilities = props.active.music.visibleIntervals;

    const getClasses = (key) => {        
        const isGap = scale.isGap(key.tone);
        const interval = scale.getInterval(key.tone);
        const isSharp = key.modifier > 0;
        const tonality = scale.getTonality(key.tone);        
        const visibility = visibilities.some(val => val.interval === interval);

        return [
            { cName: 'note', condition: true },         
            { cName: 'visible', condition: visibility && visibility.active },
            { cName: 'root', condition: interval === 1 },          
            { cName: 'sharp', condition: isSharp },
            { cName: 'gap', condition: isGap },
            { cName: tonality, condition: true }
        ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');
    }

    const getStyles = (key) => {
        const isGap = scale.isGap(key.tone);
        const interval = scale.getInterval(key.tone);
        var visibilityObject = visibilities.find(val => val.interval === interval);
        return visibilityObject && visibilityObject.active && !isGap ? { color: visibilityObject.color } : null;
    }

    const handleClick = key => {
        const interval = scale.getInterval(key.tone);
        const visibility = visibilities.find(val => val.interval === interval)
        
        if(visibility) {            
            props.actions.music.setIntervalVisibility(interval, !visibility.active);
        }
    }

    return (<div className="intervals">
        {keys.map((k, index) => {
            return (<div onClick={() => handleClick(k)} key={index} className={getClasses(k)} style={getStyles(k)}>
                <span>{k.getDisplayCharacter()}</span>
                <div className="chordMajMin">{toNumerals(index + 1)}</div>
            </div>)
        })}
    </div>)
}

export default connect(
    state => ({ active: state.active }),
    dispatch => ({ actions: { 
        music: bindActionCreators(actionCreators.music, dispatch),
    }})
)(ScaleViewer);