import React, { Component } from 'react';
import Loading from './../../Loading/index'

class CreateProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            descript: "",
            cpu: "",
            ram: 0,
            disk: 0,
            display: "",
            color: "",
            gpu: "",
            amount: 0,
            price: 0,
            avatar: ""
        }
        this.id = ""
        this.input_file_image = React.createRef();
        this.handler_title = this.handler_title.bind(this)
        this.handler_descript = this.handler_descript.bind(this)
        this.handler_cpu = this.handler_cpu.bind(this)
        this.handler_ram = this.handler_ram.bind(this)
        this.handler_disk = this.handler_disk.bind(this)
        this.handler_color =  this.handler_color.bind(this)
        this.handler_gpu = this.handler_gpu.bind(this)
        this.handler_amount = this.handler_amount.bind(this)
        this.handler_price = this.handler_price.bind(this)
        this.handler_avatar = this.handler_avatar.bind(this)
        this.handler_display = this.handler_display.bind(this)
        this.handler_button_submit = this.handler_button_submit.bind(this)
    }

    handler_title(e) {
        this.setState({
            title: e.target.value
        })
    }

    handler_descript(e) {
        this.setState({
            descript: e.target.value
        })
    }

    handler_cpu(e) {
        this.setState({
            cpu: e.target.value
        })
    }

    handler_ram(e) {
        this.setState({
            ram: parseInt(e.target.value)
        })
    }

    handler_disk(e) {
        this.setState({
            disk: parseInt(e.target.value)
        })
    }

    handler_display(e) {
        this.setState({
            display: e.target.value
        })
    }

    handler_color(e) {
        this.setState({
            color: e.target.value
        })
    }

    handler_gpu(e) {
        this.setState({
            gpu: e.target.value
        })
    }

    handler_amount(e) {
        this.setState({
            amount: parseInt(e.target.value)
        })
    }

    handler_price(e) {
        this.setState({
            price: parseInt(e.target.value)
        })
    }

    handler_avatar(e) {
        this.setState({
            avatar: this.input_file_image.current.files[0]
        })
    }

    handler_button_submit() {
        let { update_product } = this.props
        update_product({...this.state, id: this.id})
    }
    
    render() {

        let { is_loading, data, is_updated } = this.props.product
        this.id = data.id ? data.id: "" 
        const title = <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="text-input" className=" form-control-label">Title</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input onChange={this.handler_title} type="text" id="text-input" name="text-input" placeholder="Name" value={ data.title ? data.title: "" } className="form-control" />
                            <small className="form-text text-muted">This is a help text</small>
                        </div>
                    </div>

        const descript =  <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="textarea-input" className=" form-control-label">Description</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <textarea onChange={this.handler_descript}  value={ data.description ? data.description: "" } name="textarea-input" id="textarea-input" rows={9} placeholder="Content..." eclassName="form-control" defaultValue={""} />
                            </div>
                        </div>
        const cpu = <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="email-input" className=" form-control-label">CPU</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input onChange={this.handler_cpu} value={ data.cpu ? data.cpu: "" } className="form-control" />
                            <small className="help-block form-text">Please enter your cpu</small>
                        </div>
                    </div>
        const display = <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="disabled-input" className=" form-control-label">Display</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input value={ data.display ? data.display: "" }  onChange={this.handler_display} type="text" id="disabled-input" name="disabled-input" placeholder="Display" className="form-control" />
                        </div>
                    </div>
        const gpu = <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="disabled-input" className=" form-control-label">GPU</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input value={ data.gpu ? data.gpu: "" }  onChange={this.handler_gpu} type="text" id="disabled-input" name="disabled-input" placeholder="GPU" className="form-control" />
                        </div>
                    </div>
        const disk = <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="disabled-input" className=" form-control-label">Disk</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input value={ data.disk ? data.disk: "" }  onChange={this.handler_disk} type="text" id="disabled-input" name="disabled-input" placeholder="Disk" className="form-control" />
                        </div>
                 </div>

        const ram = <div className="card-body card-block">
                    <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="select" className=" form-control-label">RAM</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <select onChange={this.handler_ram} name="select" id="select" className="form-control">
                                <option value="4">4Gb</option>
                                <option value="8">8Gb</option>
                                <option value="16">16Gb</option>
                            </select>
                        </div>
                    </div>
                </div>
        const color = <div className="card-body card-block">
                        <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="select" className=" form-control-label">COLOR</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <select value={ data.color ? data.color: "" } onChange={this.handler_color} name="select" id="select" className="form-control">
                                    <option value="gray">Gray</option>
                                    <option value="white">White</option>
                                    <option value="gold">Gold</option>
                                </select>
                            </div>
                        </div>
                    </div>
        const amount = <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="disabled-input" className=" form-control-label">Amount</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <input value={ data.amount ? data.amount: "" } onChange={this.handler_amount} type="number" id="disabled-input" name="disabled-input" placeholder="Amount" className="form-control" />
                            </div>
                    </div>
        const price = <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="disabled-input" className=" form-control-label">Price</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <input value={ data.price ? data.price: "" } onChange={this.handler_price} type="number" id="disabled-input" name="disabled-input" placeholder="Price" className="form-control" />
                            </div>
                    </div>
        const image = <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="file-multiple-input" className=" form-control-label">Image</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input onChange={this.handler_avatar} ref={this.input_file_image} type="file" id="file-multiple-input" name="file-multiple-input" multiple className="form-control-file" />
                        </div>
                    </div>
        const submit = <div className="card-footer">
                            <button onClick={this.handler_button_submit} type="submit" className="btn btn-success btn-sm">
                                <i className="fa fa-dot-circle-o" /> Update
                            </button>
                        </div>
        
        return (
            
            <div className="main-content">
                {
                    is_loading === true ? <Loading></Loading>:
                
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {
                                    is_updated === true ? <div class="alert alert-success" role="alert">
                                                            Update product is success
                                                        </div> : <div></div>
                                }

                                {
                                    is_updated === false? <div class="alert alert-danger" role="alert">
                                            Update product to fail, please try again
                                        </div> : <div></div>
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Create product</h2>
                                        </div>
                                    <div className="card-body card-block m-t-30">
                                        <form action method="post" encType="multipart/form-data" className="form-horizontal">
                                            
                                            {title}
                                            {descript}
                                            {cpu}
                                            {display}
                                            {gpu}
                                            {disk}
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="row form-group">
                                    <div className="card">
                                        {ram}
                                        {color}
                                        {amount}
                                        {price}
                                        {image}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            {submit}
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default CreateProduct;