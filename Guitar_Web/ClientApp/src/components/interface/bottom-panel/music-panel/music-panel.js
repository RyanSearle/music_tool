import React from 'react';
import './music-panel.scss';

const MusicPanel = props => {

    // Keys
    const currentKey = props.music.key;
    const keys = props.collections.keys;

    const changeKey = (e) => {
        const val = e.target.value;
        
        const key = keys.find(k => k.pitch.toString() === val);
        props.actions.changeKey(key);
    }

    // Scale visibility
    const currentScaleVisibility = props.music.visibility.scale;

    const changeScaleVisibility = (e) => {
        const val = e.target.checked;
                
        props.actions.changeScaleVisibility(val);
    }

    // Root visibility
    const currentRootVisibility = props.music.visibility.root;

    const changeRootVisibility = (e) => {
        const val = e.target.checked;
                
        props.actions.changeRootVisibility(val);
    }

    // Third visibility
    const currentThirdVisibility = props.music.visibility.third;

    const changeThirdVisibility = (e) => {
        const val = e.target.checked;
                
        props.actions.changeThirdVisibility(val);
    }

    // Fifth visibility
    const currentFifthVisibility = props.music.visibility.fifth;

    const changeFifthVisibility = (e) => {
        const val = e.target.checked;
                
        props.actions.changeFifthVisibility(val);
    }

    return (<div className="control-panel">
        {/* Keys */}
        <div className="control">
            <label>Key</label>
            <select onChange={changeKey} value={currentKey.pitch}>
                {keys.map(key => {
                    return (<option key={key.pitch} value={key.pitch}>{key.note}</option>)
                })}
            </select>
        </div>

        {/* Scale visibility */}
        <div className="control">
            <label>Scale visible</label>
            <input type="checkbox" onChange={changeScaleVisibility} checked={currentScaleVisibility} />
        </div>

        {/* Root visibility */}
        <div className="control">
            <label>Root visible</label>
            <input type="checkbox" onChange={changeRootVisibility} checked={currentRootVisibility} />
        </div>

        {/* Third visibility */}
        <div className="control">
            <label>Third visible</label>
            <input type="checkbox" onChange={changeThirdVisibility} checked={currentThirdVisibility} />
        </div>

        {/* Fifth visibility */}
        <div className="control">
            <label>Fifth visible</label>
            <input type="checkbox" onChange={changeFifthVisibility} checked={currentFifthVisibility} />
        </div>
    </div>)
}

export default MusicPanel;