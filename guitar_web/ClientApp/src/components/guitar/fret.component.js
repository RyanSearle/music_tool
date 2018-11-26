import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/guitar.store'

const FretComponent = props => {

    props.filters.forEach(filter => {
        console.log(filter);
        
        // Fix filter to use scales rule
        //filter.dispatch(props.fret, null);
    })
    

    return (<span>----{props.fret.note}----</span>
)}

export default connect(
    state => state.guitar.interface,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FretComponent);