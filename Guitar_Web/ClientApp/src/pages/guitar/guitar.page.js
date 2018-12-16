import React from 'react';
import './guitar.page.scss';
import StringInstrument from "../../components/instruments/string-instrument/string-instrument.component";
import { connect } from 'react-redux';

const GuitarPage = (props) => {

    document.title = 'Music Tool - Guitar'

    const guitar = (
        <StringInstrument instrument={props.active.instrument.guitar} music={props.active.music}></StringInstrument>
    )

    const bass= (
        <StringInstrument instrument={props.active.instrument.bass} music={props.active.music}></StringInstrument>
    )

    const instrument = props.active.instrument.selected === 'guitar' ? guitar : bass;

    return (
        <div className="guitar-page">
            <div className="center-box">
                {instrument}
            </div>
        </div>
    )
}

export default connect(
    state => ({ active: state.active})
)(GuitarPage);

