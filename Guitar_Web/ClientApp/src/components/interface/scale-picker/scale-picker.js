import React from 'react';
import './scale-picker.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/stores/active/active.store';


const ScalePicker = props => {

    const scaleSets = props.collections.music.scaleSets;

    const activeScaleSet = props.active.music.scaleSet
    const activeScale = props.active.music.scaleTemplate;

    const changeScaleSet = (scaleSet) => {
        if(scaleSet === activeScaleSet) return;

        props.action.changeScaleSet(scaleSet);
        props.action.changeScale(scaleSet.default())
    }

    const changeScale = (scale) => {
        if(scale === activeScale) return;
        props.action.changeScale(scale);
    }

    return (<div className="controls">
    <div className="scale-sets">
        {scaleSets.map((scaleSet, i) => <div 
            className={scaleSet === activeScaleSet ? 'active' : ''} 
            key={i}
            onClick={() => changeScaleSet(scaleSet)}>
            {scaleSet.name}
        </div>)}
    </div>

    <div className="scales">
        {activeScaleSet.scales.map((scale, i) => <div 
            className={scale === activeScale ? 'active' : ''} 
            key={i}
            onClick={() => changeScale(scale)}>
            {scale.name}
        </div>)}
    </div>

    </div>)
}

export default connect(
    state => ({ 
        collections: state.collections, 
        active: state.active
    }),
    dispatch => ({
        action: bindActionCreators(actionCreators.music, dispatch)
    })
)(ScalePicker)