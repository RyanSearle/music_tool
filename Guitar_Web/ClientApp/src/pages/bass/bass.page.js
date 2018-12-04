import React from 'react';
import './bass.page.scss';
import StringInstrument from "../../components/instruments/string-instrument/string-instrument.component";
import ControlPanel from "../../components/interface/control-panel/control-panel";
import { actionCreators } from '../../store/stores/active/active.store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const BassPage = (props) => {

    document.title = 'Music Tool - Guitar'

    return (
        <div className="guitar-page">
            <div className="center-box">
                <StringInstrument instrument={props.active.bass}></StringInstrument>
            </div>
            <div className="bottom-panel">
                <ControlPanel actions={props.actions} collections={{music: props.collections.music, instrument: props.collections.bass}} instrument={props.active.bass}></ControlPanel>
            </div>
        </div>
    )
}

export default connect(
    state => ({ active: state.active, collections: state.collections}),
    dispatch => ({actions: bindActionCreators(actionCreators.bass, dispatch)})
)(BassPage);

