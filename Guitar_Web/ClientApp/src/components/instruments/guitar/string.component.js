import React from 'react';
import Fret from './fret.component';

const StringComponent = props => {

    const fretCount = props.str.frets.length;
    const width = 100 / fretCount;

    return (
        <div className="guitar-string">
            {props.str.frets.map((fret, i) => {
                return <Fret width={width} key={i} fret={fret}></Fret>
            })}
        </div>
    )
}

export default StringComponent;