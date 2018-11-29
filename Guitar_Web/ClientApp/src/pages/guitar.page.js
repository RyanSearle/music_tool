import React from 'react';
import './guitar.page.scss';
import Guitar from "../components/instruments/guitar/guitar.component";
import ControlPanel from "../components/interface/control-panel";

const GuitarPage = (props) => {

    document.title = 'Music Tool - Guitar'

    return (
        <div className="guitar-page">
            <div className="center-box">
                <Guitar></Guitar>
            </div>
            <div className="bottom-panel">
                <ControlPanel></ControlPanel>
            </div>
        </div>
    )
}



export default GuitarPage;
