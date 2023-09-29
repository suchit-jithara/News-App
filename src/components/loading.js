import React, { Component } from 'react'
import gif from './loading-loading-forever.gif'

export default class loading extends Component {
    render() {
        return (
            <div className='container text-center' 
            
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: "5      0vh"
            }}>
                <img src={gif} alt="loading" style={{height:"100px", width: '100px'}} />
                {/* <div style={{
                    height:"100px", 
                    width: '100px',
                    borderRadius: "50%",
                    borderTop: '11px solid white',
                    background: "transperent",
                    transform
                    
                }}></div> */}
            </div>
        )
    }
}