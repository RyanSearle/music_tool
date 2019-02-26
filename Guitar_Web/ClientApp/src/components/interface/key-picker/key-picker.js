import React from "react";
import { connect } from 'react-redux';
import './key-picker.scss';
import { bindActionCreators } from "redux";
import { actionCreators } from '../../../store/stores/active/active.store';

const KeyPicker = props => {

    const activeKey = props.active.music.key;
    const keys = props.collections.music.keys;
    const scaleTemplate = props.active.music.scaleTemplate;

    const rationalKeys = new Array(12).fill().map((_,index) => {
        const keysInPitch = keys.filter(key => key.pitch === index);
        console.log(keysInPitch);
        
        return keysInPitch.reduce((acc, next) => {
            const complexity = scaleTemplate.createScale(next).getComplexity();
            return complexity <= acc.complexity ? {key: next, complexity} : acc;
        }, {complexity: 999}).key;
    })

    const getClasses = key => {
        return [
            { cName: 'key', condition: true },
            { cName: 'active', condition: key === activeKey },
        ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');
    }

    const changeKey = key => {
        if(key === activeKey) return;

        props.action.changeKey(key);
    }

    return (<div className="key-picker">
        {rationalKeys.map((k, index) => <div className={getClasses(k)} onClick={() => changeKey(k)} key={index}>{k.getDisplayCharacter()}</div>)}
    </div>)
}

export default connect(
    state => ({ 
        active: state.active,
        collections: state.collections
    }),
    dispatch => ({
        action: bindActionCreators(actionCreators.music, dispatch)
    })
)(KeyPicker);