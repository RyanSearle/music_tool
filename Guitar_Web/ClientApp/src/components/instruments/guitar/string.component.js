import React from 'react';
import Fret from './fret.component';

const StringComponent = props => {
    return (
        <div className="guitar-string">
            {props.str.frets.map((fret, i) => {
                return <Fret width={props.widths[i]} key={i} fret={fret}></Fret>
            })}
        </div>
    )
}

export default StringComponent;