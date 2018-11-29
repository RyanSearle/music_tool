import React from 'react';
import { Route } from 'react-router';
import GuitarPage from "./pages/guitar.page";

export default () => (
 
    <Route exact path='/' component={GuitarPage} />

);
