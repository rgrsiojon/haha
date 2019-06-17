import React, { Component } from 'react';

class Home extends Component {

    componentDidMount() {
        let { get_all_products } = this.props
        get_all_products()
    }

    render() {
        
        let { is_loading, data } = this.props.product
        let products = is_loading !== false ? <div>loading</div> : data.map(i => {
            return <div key={i.id} className="col-sm-6 col-lg-3">
                <div className="card overview-item p-b-15">
                    <img className="card-img-top" src={i.avatar} alt="Card image cap" />
                    <div className="m-t-10"> 
                        <p className="card-text">{i.title}</p> <a href="#" style={{color: "#17a2b8"}} className="card-link">Chi tiết sản </a>
                    </div>
                    <h2 className="m-t-10" style={{fontSize: 16, color: "#dc3545"}}>{i.price} VND</h2>
                    <div className="m-t-10">
                        <i className="zmdi zmdi-shopping-cart"></i>
                        <a href="#" className="m-l-8">Thêm vào giỏ hàng</a>
                        
                    </div>
                </div>
            </div>
        })
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row m-t-20">
                            <div className="col-md-12">
                                <div className="overview-wrap">
                                    <h2 className="title--sbold">MAC</h2>

                                </div>
                                <div className="line-seprate welcome2"></div>
                            </div>
                        </div>
                        <div className="row m-t-20">
                            <div className="col-md-12">
                                <div class="dropdown">
                                    <button class="btn btn-info dropdown-toggle m-r-20" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sắp xếp
                                    </button>
                                    <div style={{ display: "inline-block" }}>
                                        Thứ tự theo giá: từ thấp đến cao
                                    </div>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-35">{products}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;