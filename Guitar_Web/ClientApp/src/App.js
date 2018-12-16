import React from 'react';
import { Route } from 'react-router';
import GuitarPage from "./pages/guitar/guitar.page";
import InstrumentSelect from './components/interface/instrument-select/instrument-select';
import BottomPanel from './components/interface/bottom-panel/bottom-panel';

export default () => (
    <div className="full-page">
        <div className="instrument-select">
            <InstrumentSelect></InstrumentSelect>
        </div>
        <div className="routes">
            <Route exact path='/' component={GuitarPage} />
        </div>
        <div className="panels">
            <BottomPanel></BottomPanel>
        </div>
    </div>
);
