import React, { Component } from 'react';
import Loading from './../Loading'

class Carousel extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        var product = null
        if (this.props.data !== null) {
            product =  this.props.data.map((item, index) => {
                return <div className={`item ${(index === 0)? "active" : ""}`}>
                            <div className="col-sm-6">
                                <h1><span>E</span>-MAC</h1>
                                <h2>{item.title}</h2>
                                <p>{item.status}</p>
                                <button type="button" className="btn btn-default get">Get it now</button>
                            </div>
                            <div className="col-sm-6">
                                <img src={item.avatar} className="girl img-responsive" alt />
                            </div>
                        </div>
            })
        } else {
            product = <Loading></Loading>
        }
        return (
            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#slider-carousel" data-slide-to={0} className="active" />
                    <li data-target="#slider-carousel" data-slide-to={1} />
                    <li data-target="#slider-carousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    {product}
                </div>
                <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                    <i className="fa fa-angle-left" />
                </a>
                <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                    <i className="fa fa-angle-right" />
                </a>
            </div>

        );
    }
}

export default Carousel;