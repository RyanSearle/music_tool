import React from "react";
import { connect } from 'react-redux';
import './key-picker.scss';
import { bindActionCreators } from "redux";
import { actionCreators } from '../../../store/stores/active/active.store';

const KeyPicker = props => {
    
    const tones = props.collections.music.tones;
    const scaleTemplate = props.active.music.scaleTemplate;
    const activeKeyTone = props.active.music.keyTone;
    
    const rationalKeys = tones.map(tone => {
        return scaleTemplate.createScale(tone).rootKey;
    });


    const getClasses = key => {
        return [
            { cName: 'key', condition: true },
            { cName: 'active', condition: key.tone.pitch === activeKeyTone.pitch },
        ].filter(cl => cl.condition).map(cl => cl.cName).join(' ');
    }

    const changeKey = key => {
        if(key.tone === activeKeyTone) return;

        props.action.changeKeyTone(key.tone);
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