import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './guitar.scss';
import Fret from './fret.component';
import { actionCreators } from '../../../store/guitar.store'
import { Guitar } from '../../../store/instruments/guitar/guitar.model';
import { getFretWidths, getFretHeights } from './guitar-anatomy';
import { makeArray } from '../../../helpers';

const GuitarComponent = props => {


    const fretHeight = 30;
    const guitar = new Guitar(props.abc.active.tuning, props.abc.active.fretCount);
    const fretCount = guitar.fretCount;
    const widths = getFretWidths(fretCount);
    const heights = getFretHeights(fretHeight, fretCount, guitar.strings.length);

    // SVG 
    const scalingRatio = (heights[0] / fretHeight);
    const scallingPercent = (scalingRatio * 100);
    const topLeftY = (100 - scallingPercent) / 2;
    const bottomLeftY = scallingPercent + topLeftY;

    const pointArray = [
        { x: 0, y: topLeftY },
        { x: 100, y: 0 },
        { x: 100, y: 100 },
        { x: 0, y: bottomLeftY },
    ]

    const points = pointArray.map(point => `${point.x} ${point.y}`).join(',');

    return (
        <div className="guitar">
            <div className="fret-count-row">
                {makeArray(fretCount).map((_fret, i) => {
                    return <span className="fret-indicator" key={i} style={{ width: widths[i] + '%' }}>{i}</span>
                })}
            </div>
            <div className="fret-board">
                <div className="shadow"></div>
                <div className="fretboard-svg">
                    <svg className="guitar-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points={points} />
                    </svg>
                </div>
                {makeArray(fretCount).map((_val, i) => {
                    return <div key={i} style={{ width: widths[i] + '%' }} className="fret-section">
                        {guitar.strings.map((guitarStr, s) => {
                            return <Fret first={s === 0} last={s === guitar.strings.length - 1} className="fret" key={s} width={100} height={heights[i]} fret={guitarStr.frets[i]}></Fret>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}

export default connect(
    state => ({ abc: state.guitar }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(GuitarComponent);
