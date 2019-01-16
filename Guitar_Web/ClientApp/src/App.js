import React from 'react';
import { Route } from 'react-router';
import GuitarPage from "./pages/guitar/guitar.page";
import BottomPanel from './components/interface/bottom-panel/bottom-panel';
import ScaleViewer from './components/interface/scale-viewer/scale-viewer';
import ScalePicker from './components/interface/scale-picker/scale-picker';
import KeyPicker from './components/interface/key-picker/key-picker';
import TuningPicker from './components/interface/tuning-picker/tuning-picker';

export default () => (
    <div className="full-page">
        <div className="scale-picker">
            <ScalePicker></ScalePicker>
        </div>
        <div className="key-picker-container">
            <KeyPicker></KeyPicker>
        </div>
        <div className="tuning-picker-container">
            <TuningPicker></TuningPicker>
        </div>
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
