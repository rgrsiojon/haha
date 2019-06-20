import React, { Component } from 'react';
import Loading from './../../Loading/index'

class CreateProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            descript: null,
            cpu: null,
            ram: 0,
            disk: null,
            display: null,
            color: null,
            gpu: null,
            amount: null,
            price: null,
            avatar: ""
        }
        this.id = ""
        this.input_file_image = React.createRef();
        this.preview_file = React.createRef();
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
        this.handler_choose_file = this.handler_choose_file.bind(this)
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
        var reader  = new FileReader();
        reader.addEventListener("load", () => {
            this.preview_file.current.src = reader.result; 
        }, false);
    
        if (this.input_file_image.current.files[0]) {
            reader.readAsDataURL(this.input_file_image.current.files[0])
        }
    }

    handler_button_submit() {
        let { update_product } = this.props
        update_product({...this.state, id: this.props.id})
    }

    handler_choose_file() {
        this.input_file_image.current.click()
    }

    componentDidMount() {
        let { _get_product_by_id } = this.props
        _get_product_by_id(this.props.id)
    }
    
    render() {
        let { is_loading, product, is_updated } = this.props.product
        const title = product !== null ? <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="text-input" className=" form-control-label">Title</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input onChange={this.handler_title} type="text" id="text-input" name="text-input" placeholder="Name" value={ this.state.title !== null ? this.state.title : product.title} className="form-control" />
                            <small className="form-text text-muted">This is a help text</small>
                        </div>
                    </div>: <div></div>

        const descript = product !== null ? <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="textarea-input" className=" form-control-label">Description</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <textarea onChange={this.handler_descript}  value={ this.state.descript !== null ? this.state.descript : product.title}  name="textarea-input" id="textarea-input" rows={9} placeholder="Content..." eclassName="form-control" defaultValue={""} />
                            </div>
                        </div>: <div></div>
        const cpu = product !== null ? <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="email-input" className=" form-control-label">CPU</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input onChange={this.handler_cpu} value={ this.state.cpu !== null ? this.state.cpu : product.cpu}  className="form-control" />
                            <small className="help-block form-text">Please enter your cpu</small>
                        </div>
                    </div>: <div></div>
        const display = product !== null ? <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="disabled-input" className=" form-control-label">Display</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input value={ this.state.display !== null ? this.state.display : product.display}   onChange={this.handler_display} type="text" id="disabled-input" name="disabled-input" placeholder="Display" className="form-control" />
                        </div>
                    </div>: <div></div>
        const gpu = product !== null ? <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="disabled-input" className=" form-control-label">GPU</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input value={ this.state.gpu !== null ? this.state.gpu : product.gpu}   onChange={this.handler_gpu} type="text" id="disabled-input" name="disabled-input" placeholder="GPU" className="form-control" />
                        </div>
                    </div>: <div></div>
        const disk = product !== null ? <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="disabled-input" className=" form-control-label">Disk</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <select onChange={this.handler_disk} name="select" id="select" className="form-control">
                                <option value="256">256Gb</option>
                                <option value="512">512Gb</option>
                                <option value="1024">1024Gb</option>
                            </select>
                        </div>
                 </div>: <div></div>

        const ram = product !== null ?  <div className="card-body card-block">
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
                </div> : <div></div>
        const color =  product !== null ? <div className="card-body card-block">
                        <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="select" className=" form-control-label">COLOR</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <select value={ this.state.color !== null ? this.state.color : product.color}  onChange={this.handler_color} name="select" id="select" className="form-control">
                                    <option value="gray">Gray</option>
                                    <option value="white">White</option>
                                    <option value="gold">Gold</option>
                                </select>
                            </div>
                        </div>
                    </div> : <div></div>
        const amount =  product !== null ? <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="disabled-input" className=" form-control-label">Amount</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <input value={ this.state.amount !== null ? this.state.amount : product.amount}  onChange={this.handler_amount} type="number" id="disabled-input" name="disabled-input" placeholder="Amount" className="form-control" />
                            </div>
                    </div>: <div></div>
        const price =  product !== null ? <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="disabled-input" className=" form-control-label">Price</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <input value={ this.state.price !== null ? this.state.price : product.price}  onChange={this.handler_price} type="number" id="disabled-input" name="disabled-input" placeholder="Price" className="form-control" />
                            </div>
                    </div> : <div></div>
        const image = product !== null ?  <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="file-multiple-input" className=" form-control-label">Image</label>
                        </div>
                        <div className="col-12 col-md-9 text-center">
                            <img ref={this.preview_file} className="m-b-30" src={product.avatar} width="100%"/>
                            <button onClick={this.handler_choose_file} style={{margin: 0}} type="button" className="btn btn-fefault cart m-t-15">
                                Thay đổi ảnh
                            </button>
                            <input onChange={this.handler_avatar} style={{display: "none"}} ref={this.input_file_image} type="file" id="file-multiple-input" name="file-multiple-input" multiple className="form-control-file" />
                        </div>
                    </div>: <div></div>
        const submit = product !== null ? <div className="card-footer">
                            <button onClick={this.handler_button_submit} type="submit" className="btn btn-success btn-sm">
                                <i className="fa fa-dot-circle-o" /> Update
                            </button>
                        </div> : <div></div>
        
        return (
            
            <div className="main-content">
                {
                    is_loading === true ? <Loading></Loading>:
                
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {
                                    is_updated === true ? <div class="alert alert-success my--alert--secon" role="alert">
                                                            Update product is success
                                                        </div> : <div></div>
                                }

                                {
                                    is_updated === false? <div class="alert alert-danger my--alert--deger" role="alert">
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