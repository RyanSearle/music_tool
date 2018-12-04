import React from 'react';
import { Route } from 'react-router';
import GuitarPage from "./pages/guitar/guitar.page";
import BassPage from "./pages/bass/bass.page";
import InstrumentSelect from './components/interface/instrument-select/instrument-select';

export default () => (
 <div className="full-page">
    <div className="instrument-select">
        <InstrumentSelect></InstrumentSelect>
    </div>
     <div className="routes">
        <Route exact path='/' component={GuitarPage} />
        <Route exact path='/bass' component={BassPage} />
     </div>

 </div>
);
