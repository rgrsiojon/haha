import React, { Component } from 'react';

class Alert extends Component {
    render() {
        return (
            <div className={`container my--alert ${this.props.class}`}>
                <div className="row">
                    <div className="col-lg-12">
                        <div class="alert alert-secondary" role="alert">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;