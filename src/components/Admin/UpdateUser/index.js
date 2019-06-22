import React, { Component } from 'react';

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            phone: null,
            address: null,
            file: null
        }
        this.avatar = React.createRef()
        this.preview_file = React.createRef()
        this.hendler_change_email = this.hendler_change_email.bind(this)
        this.hendler_change_address = this.hendler_change_address.bind(this)
        this.hendler_change_phone = this.hendler_change_phone.bind(this)
        this.hendler_change_avatar = this.hendler_change_avatar.bind(this)
        this.handler_button_on_click = this.handler_button_on_click.bind(this)
        this.handler_update_info_user = this.handler_update_info_user.bind(this)
    }

    componentDidMount() {
        let { _get_user_info } = this.props
        _get_user_info(this.props.id)
    }

    hendler_change_email(e) {
        this.setState({
            email: e.target.value
        })
    }

    hendler_change_phone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    hendler_change_address(e) {
        this.setState({
            address: e.target.value
        })
    }

    hendler_change_avatar() {
        this.setState ({
            file: this.avatar.current.files[0]
        })

        var reader  = new FileReader();
        reader.addEventListener("load", () => {
            this.preview_file.current.src = reader.result; 
        }, false);
    
        if (this.avatar.current.files[0]) {
            reader.readAsDataURL(this.avatar.current.files[0])
        }
    }

    handler_button_on_click() {
        this.avatar.current.click()
    }

    handler_update_info_user() {
        let { _update_user_info } = this.props
        _update_user_info({
            id: this.props.id,
            ...this.state
        })
    }

    render() {

        const user = this.props.user.user_info

        const email = user !== null ? <div className="row form-group">
            <div className="col col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Email</label>
            </div>
            <div className="col-12 col-md-9">
                <input onChange={this.hendler_change_email} value={this.state.email !== null ? this.state.email : user.email } type="text" id="text-input" name="text-input" placeholder="Email" className="form-control" />
                <small className="form-text text-muted">This is a help text</small>
            </div>
        </div> : <div></div>

        const phone = user !== null ? <div className="row form-group">
            <div className="col col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Phone</label>
            </div>
            <div className="col-12 col-md-9">
                <input onChange={this.hendler_change_phone} value={this.state.phone !== null ? this.state.phone : user.phone} type="number" id="text-input" name="text-input" placeholder="phone" className="form-control" />
                <small className="form-text text-muted">This is a help text</small>
            </div>
        </div> : <div></div>

        const address = user !== null ? <div className="row form-group">
                <div className="col col-md-3">
                    <label htmlFor="text-input" className=" form-control-label">Address</label>
                </div>
                <div className="col-12 col-md-9">
                    <input onChange={this.hendler_change_address} type="text" value={this.state.address !== null ? this.state.address : user.address} id="text-input" name="text-input" placeholder="Email" className="form-control" />
                    <small className="form-text text-muted">This is a help text</small>
                </div>
            </div>: <div></div>

        const avatar = user !== null ?  <div className="row form-group">
            <div className="col col-md-3">
                <label htmlFor="file-multiple-input" className=" form-control-label">Image</label>
            </div>
            <div className="col-12 col-md-9 text-center">
                <img className="m-b-30" ref={this.preview_file} src={user.avatar} width="100%"/>
                <button style={{margin: 0}} onClick={this.handler_button_on_click} type="button" className="btn btn-fefault cart m-t-15">
                    Thay đổi ảnh
                </button>
                <input onChange={this.hendler_change_avatar} ref={this.avatar} style={{display: "none"}} type="file" id="file-multiple-input" name="file-multiple-input" multiple className="form-control-file" />
            </div>
            </div>: <div></div>

        console.log(this.props.user)
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="col-lg-6">
                            {email}
                            {phone}
                            {address}
                        </div>
                        <div className="col-lg-6">
                            {avatar}
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-12 text-center">
                                <button onClick={this.handler_update_info_user} style={{margin: 0}} type="button" className="btn btn-fefault cart m-t-15">
                                    Update User Info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateUser;