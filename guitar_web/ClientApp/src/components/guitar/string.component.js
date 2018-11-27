import React from 'react';
import Fret from './fret.component';

const StringComponent = props => (
    <div>
        {props.str.frets.map((fret, i) => {
            return <Fret key={i} fret={fret}></Fret>
        })}
    </div>
)

export default StringComponent;