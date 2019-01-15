import React from 'react';
import './bottom-panel.scss';
import { actionCreators } from '../../../store/stores/active/active.store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MusicPanel from './music-panel/music-panel';
import InstrumentPanel from './instrument-panel/instrument-panel';

const BottomPanel = (props) => {

    const guitarPanel = (<InstrumentPanel
        actions={props.actions.instrument.guitar}
        collections={props.collections.guitar}
        instrument={props.active.instrument.guitar}
        instruments={props.collections.music.instruments}
        instrumentAction={props.actions.instrument.general}>
    </InstrumentPanel>)

    const bassPanel = (<InstrumentPanel
        actions={props.actions.instrument.bass}
        collections={props.collections.bass}
        instrument={props.active.instrument.bass}
        instruments={props.collections.music.instruments}
        instrumentAction={props.actions.instrument.general}>
    </InstrumentPanel>)

    const panel = props.active.instrument.selected === 'Guitar' ? guitarPanel : bassPanel;

    return (
        <div className="bottom-panel">
            <div className="left-panel">
                {/* <MusicPanel actions={props.actions.music} collections={props.collections.music} music={props.active.music}></MusicPanel> */}
            </div>
            <div className="right-panel">
                {panel}
            </div>
        </div>
    )
}

export default connect(
    state => ({ active: state.active, collections: state.collections }),
    dispatch => ({ actions: { 
        music: bindActionCreators(actionCreators.music, dispatch),
        instrument: {
            general: bindActionCreators(actionCreators.instrument.general, dispatch), 
            guitar: bindActionCreators(actionCreators.instrument.guitar, dispatch),
            bass: bindActionCreators(actionCreators.instrument.bass, dispatch),
        } 
    } })
)(BottomPanel);
