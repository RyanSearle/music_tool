import React from 'react';
import Fret from './fret.component';

const StringComponent = props => (
    <div>
        {props.str.frets.map(fret => {
            return <Fret fret={fret}></Fret>
        })}
    </div>
)

export default StringComponent;