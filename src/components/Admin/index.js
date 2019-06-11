import React, { Component } from 'react';

class Admin extends Component {

    componentDidMount() {
        let { get_all_products } = this.props
        get_all_products()
    }
    render() {
        let { is_loading, data } = this.props.product
        let products = is_loading !== false ? <div>loading</div> : data.map(i => {
            return <tr>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.color}</td>
                <td className="text-right">{i.price}</td>
                <td className="text-right">{i.ram}</td>
            </tr>
        })

        return (
            <div className="main-content"> 
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="overview-wrap">
                                    <h2 className="title-1 m-b-25">Production</h2>
                                    <button className="au-btn au-btn-icon au-btn--blue">
                                        <i className="zmdi zmdi-plus" />add item
                                    </button>
                                </div>
                                
                                <div className="table-responsive table--no-card m-b-40">
                                    <table className="table table-borderless table-striped table-earning">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>name</th>
                                                <th>color</th>
                                                <th className="text-right">price</th>
                                                <th className="text-right">ram</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Admin;