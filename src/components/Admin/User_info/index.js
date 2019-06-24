import React, { Component } from 'react';
import { connect } from "react-redux";

import { 
    get_user_info
} from './../../../store/actions/user'

class UserInfo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { _get_user_by_id } = this.props
        _get_user_by_id(this.props.id)
    }

    render() {
        console.log(this.props.user)
        let { is_loading, user_info } = this.props.user
        console.log(user_info)
//         active: 1
// address: "208 nguyen huu canh"
// avatar: "http://webshop-api.tk/images/1560769802.jpg"
// email: "hacnguyen@gmail.com"
// id: "1"
// password: "$2a$10$c6UqzGoh86ui9ng/IqWU3.9SjWVyttbLyfipb3b/X6VlVE7.rb0nK"
// phone: "01223365006"
        return (
              <div>
                {
                    user_info !== null && <> <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="text-input" className=" form-control-label">Email</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <input value={user_info.email} type="text"  id="text-input" name="text-input" placeholder="Address" className="form-control" />
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="text-input" className=" form-control-label">Address of user</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <input value={user_info.address} type="text"  id="text-input" name="text-input" placeholder="Address" className="form-control" />
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="text-input" className=" form-control-label">Phone of user</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <input value={user_info.phone} type="text"  id="text-input" name="text-input" placeholder="Address" className="form-control" />
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="text-input" className=" form-control-label">Avatar of user</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <div style={{
                                    backgroundImage: `url(${user_info.avatar})`,
                                    width: 300,
                                    height: 300,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }} ></div>
                            </div>
                        </div>
                    </>
                }
                
            </div>
        
        );
    }
}

const map_state_to_props = state => ({
    auth: state.auth, 
    user: state.user
})

const map_dispatch_to_props = dispatch => ({
    _get_user_by_id: function(id) {
        dispatch(get_user_info(id))
    }
})

export default connect( 
    map_state_to_props,
    map_dispatch_to_props
)(UserInfo);
