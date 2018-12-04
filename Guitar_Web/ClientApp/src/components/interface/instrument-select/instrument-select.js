import React from "react";
import { withRouter } from 'react-router-dom'
import './instrument-select.scss';
import guitarImg from '../../../images/electric-guitar-music-instrument.svg';
import bassImg from '../../../images/bass-guitar.svg';

const InstrumentSelect = withRouter(({history, location}) => {

    const goToPage = page => {
        history.push(`/${page}`);
    }

console.log(location);


    const getClasses = route => {
        var classes = [
            'instrument-container'
        ]
        if(location.pathname === '/' + route) {
            classes.push('active');
        }
        return classes.join(' ');
    }
    
    return (
        <div className='instruments'>
            <div className={getClasses('')} onClick={() => goToPage('')}>
                <img src={guitarImg}></img>
            </div>
            <div className={getClasses('bass')} onClick={() => goToPage('bass')}>        
                <img src={bassImg}></img>
            </div>
        </div>
    )
});

export default InstrumentSelect;