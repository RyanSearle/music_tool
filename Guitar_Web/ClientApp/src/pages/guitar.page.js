import React from 'react';
import Guitar from "../components/instruments/guitar/guitar.component";
import ControlPanel from "../components/interface/control-panel";

const GuitarPage = (props) => (
    <div>
        <h1>Guitar</h1>
        <Guitar></Guitar>
        <ControlPanel></ControlPanel>
    </div>
)



export default GuitarPage;
