import React from 'react';
import './guitar.scss';
import Fret from './fret';
import { getFretWidths, getFretHeights, getFretMarkers, getFretHeight } from './guitar-anatomy';
import { makeArray } from '../../../helpers';
import { Guitar } from '../../../domain/instruments/guitar/guitar.model';


export const GuitarComponent = props => {

    // height = viewWidth * fretHeight + fretBase
    const fretHeight = 2.2;
    // const fretBase = 0.0
    const guitar = new Guitar(props.instrument.tuning, props.instrument.fretCount);
    const scale = props.music.scaleTemplate.createScale(props.music.keyTone);

    const tones = props.collections.music.tones;
    const scaleTemplate = props.music.scaleTemplate;    
    
    const rationalKeys = tones.map(tone => {
        return scaleTemplate.createScale(tone).rootKey;
    });

    // Account for open string
    const fretCount = guitar.fretCount;

    const widths = getFretWidths(fretCount);
    const height = getFretHeight(0, fretHeight, guitar.strings.length);
    const markers = getFretMarkers();

    // SVG 
    const scalingRatio = (height / fretHeight);
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
                    return <span className="fret-indicator" 
                    key={i} 
                    style={{ width: widths[i] + '%' }}>{i > 0 ? i : ''}
                    </span>
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
                    const percentage = widths.slice(0, i + 1).reduce((acc, next) => acc + next);
                    const height = getFretHeight(percentage, fretHeight, guitar.strings.length);
                    
                    return <div key={i} style={{ width: widths[i] + '%' }} className="fret-section">
                        {guitar.strings.map((guitarStr, s) => {
                            return <Fret music={props.music}
                             scale={scale} 
                             rationalKeys={rationalKeys} 
                             first={s === 0} 
                             last={s === guitar.strings.length - 1} 
                             className="fret" 
                             key={s} 
                             width={100} 
                             height={height} 
                             tone={guitarStr.frets[i]}></Fret>
                        })}
                    </div>
                })}
            </div>
            <div className="markers">
                {makeArray(fretCount).map((_val, i) => {
                    return <div key={i} 
                        style={{ width: widths[i] + '%' }} 
                        className="fret-footer">
                        {getMarkerSingle(i) ? <div>&bull;</div> : null}
                        {getMarkerDouble(i) ? <div>&bull;</div> : null}
                    </div>
                })}
            </div>
        </div>
    )
}

