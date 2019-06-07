import React, { Component } from 'react'
import './Loading.css'

class Loading extends Component {
    render() {
        return (
            <div className="sonar-wrapper">
                <div className="sonar-emitter">
                <div className="sonar-wave" />
                </div>
            </div>
        )
    }
}

export default Loading;