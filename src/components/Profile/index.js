import React, { Component } from 'react'
import Loading from './../Loading';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: null,
            address: null,
            phone: null,
            file: ""
        }

        this.handel_change_address = this.handel_change_address.bind(this)
        this.handel_change_email = this.handel_change_email.bind(this)
        this.handel_change_phone = this.handel_change_phone.bind(this)
        this.handler_click_update = this.handler_click_update.bind(this)
        this.handeler_file_avatar= this.handeler_file_avatar.bind(this)
    }

    componentDidMount() {
        let { _get_user_info } = this.props
        _get_user_info(this.props.auth.data.id)
    }

    handel_change_email(e) {
        this.setState ({
            email: e.target.value
        })
    }

    handel_change_address(e) {
        this.setState ({
            address: e.target.value
        })
    }

    handel_change_phone(e) {
        this.setState ({
            phone: e.target.value
        })
    }

    handeler_file_avatar() {

    }

    handler_click_update() {
        let { _update_user_info } = this.props
        _update_user_info({
            id: this.props.auth.data.id,
            ...this.state
        })
    }

    render() {
        let auth = this.props.auth
        let { is_loading, user_info } = this.props.user
        console.log(this.props)

        const email = user_info !== null ? <div className="row form-group">
            <div className="col col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Email</label>
            </div>
            <div className="col-12 col-md-9">
                <input onChange={this.handel_change_email} type="text" id="text-input" name="text-input" value={ this.state.email !== null ? this.state.email :user_info.email} placeholder="Email" className="form-control" />
            </div>
        </div> : <div></div>
        const address = user_info !== null ? <div className="row form-group">
            <div className="col col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Address</label>
            </div>
            <div className="col-12 col-md-9">
                <input onChange={this.handel_change_address} type="text" id="text-input" value={ this.state.address !== null ? this.state.address :user_info.address} name="text-input" placeholder="Address" className="form-control" />
            </div>
        </div>  : <div></div>

        const phone = user_info !== null ? <div className="row form-group">
            <div className="col col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Phone</label>
            </div>
            <div className="col-12 col-md-9">
                <input onChange={this.handel_change_phone} value={ this.state.phone !== null ? this.state.phone :user_info.phone} type="number" id="text-input" name="text-input" placeholder="Phone number" className="form-control" />
            </div>
        </div> : <div></div>

        return (
            <>
                {
                    is_loading ? <Loading></Loading> : <div className="product-details container">
                        <div className="row text-center m-b-39">
                            <h2 class="title text-center" style={{ fontSize: "32px" }}>Thông tin cá nhân</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="view-product">
                                    <img src={user_info !== null ? user_info.avatar : ""} alt />
                                </div>
                            </div>
                            <div className="col-sm-5 pull-right">
                                {email}
                                {address}
                                {phone}
                                <div className="product-information " style={{ float: "right" }}>
                                    <button onClick={this.handler_click_update} type="button" className="btn btn-fefault cart">
                                        Cập nhật
                                        </button>
                                    <button type="button" className="btn btn-fefault cart">
                                        Đổi mật khẩu
                                        </button>
                                </div>
                            </div>

                        </div>

                    </div>
                }


            </>
        )
    }
}

export default Profile;