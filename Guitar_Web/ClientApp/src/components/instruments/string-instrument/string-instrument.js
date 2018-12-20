import React from 'react';
import './string-instrument.scss';
import Fret from './fret.component';
import { getFretWidths, getFretHeights, getFretMarkers } from './string-instrument-anatomy';
import { makeArray } from '../../../helpers';
import { StringInstrument } from '../../../store/instruments/string-instrument/string-instrument.model';


const StringInstrumentComponent = props => {

    const fretHeight = 30;
    const guitar = new StringInstrument(props.instrument.tuning, props.instrument.fretCount);

    // Account for open string
    const fretCount = guitar.fretCount;

    const widths = getFretWidths(fretCount);
    const heights = getFretHeights(fretHeight, fretCount, guitar.strings.length);
    const markers = getFretMarkers();

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

    const getMarkerSingle = (i) => {
        const marker = markers.find(x => x.fret === i);
        return marker && (marker.single || marker.double);
    }

    const getMarkerDouble = (i) => {
        const marker = markers.find(x => x.fret === i);
        return marker && marker.double;
    }

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
                            return <Fret music={props.music} first={s === 0} last={s === guitar.strings.length - 1} className="fret" key={s} width={100} height={heights[i]} fret={guitarStr.frets[i]}></Fret>
                        })}
                    </div>
                })}
            </div>
            <div className="markers">
                {makeArray(fretCount).map((_val, i) => {
                    return <div key={i} style={{ width: widths[i] + '%' }} className="fret-footer">
                        {getMarkerSingle(i) ? <div>&bull;</div> : null}
                        {getMarkerDouble(i) ? <div>&bull;</div> : null}
                    </div>
                })}
            </div>
        </div>
    )
}

export default StringInstrumentComponent;