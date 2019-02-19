import React from 'react';
import './guitar.page.scss';
import { connect } from 'react-redux';
import { GuitarComponent } from '../../components/instruments/guitar/guitar';

const GuitarPage = (props) => {

    document.title = props.active.instrument.selected === 'Guitar' ? 'Music Tool: Guitar' : 'Music Tool: Bass';

    const guitar = (
        <GuitarComponent voicing={props.active.voicing} instrument={props.active.instrument.guitar} music={props.active.music}></GuitarComponent>
    )

    const bass= (
        <GuitarComponent voicing={props.active.voicing} instrument={props.active.instrument.bass} music={props.active.music}></GuitarComponent>
    )

    const instrument = props.active.instrument.selected === 'Guitar' ? guitar : bass;

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

