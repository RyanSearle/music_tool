import React from 'react';
import { Route } from 'react-router';
import GuitarPage from "./pages/guitar/guitar.page";
import BottomPanel from './components/interface/bottom-panel/bottom-panel';
import ScaleViewer from './components/interface/scale-viewer/scale-viewer';

export default () => (
    <div className="full-page">
        <div className="scale-viewer">
            <ScaleViewer></ScaleViewer>
        </div>
        <div className="routes">
            <Route exact path='/' component={GuitarPage} />
        </div>
        <div className="panels">
            <BottomPanel></BottomPanel>
        </div>
    </div>
);
