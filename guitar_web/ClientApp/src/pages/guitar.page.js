import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/guitar.store';
import Guitar from "../components/guitar/guitar.component";

const GuitarPage = (props) => (
    <div>
        <h1>Guitar</h1>
        <Guitar></Guitar>
    </div>
)



export default GuitarPage;
