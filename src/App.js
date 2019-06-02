import React, { Component } from "react";
// import { connect } from "react-redux";
import SingIn from './containers/SingIn'
import SingUp from './containers/SingUp'
import Admin from './containers/Admin'
import Home from './containers/Home'
import TabbarAdmin from './hoc/layout/TabbarAdmin'
import Tabbar from './containers/Tabbar'
import Order from './containers/Order'
import { PAGE } from './Common'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    HashRouter
} from "react-router-dom";

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/fonts/iconic/css/material-design-iconic-font.min.css'
import './assets/vendor/animate/animate.css'
import './assets/vendor/css-hamburgers/hamburgers.min.css'
import './assets/vendor/animsition/css/animsition.min.css'
import './assets/vendor/select2/select2.min.css'
import './assets/css/main.css'
import './assets/css/util.css'
import './assets/css/theme.css'
import './assets/css/font-face.css'
import './assets/vendor/perfect-scrollbar/perfect-scrollbar.css'
import './assets/vendor/slick/slick.css'


class App extends Component {
    render() {
        let authIsSignin = false    
        let home = () => <Tabbar page = {PAGE.HOME}><Home/></Tabbar>
        let admin = () => <TabbarAdmin> <Admin/> </TabbarAdmin>
        let order = () => <Tabbar page = {PAGE.ORDER}><Order/></Tabbar>
        let routes = authIsSignin 
        ?
            <Switch>
                <Route path="/home" exact component={home} />
                <Route path="/admin" component={admin}/>
                <Redirect to="/admin"/>
            </Switch> 
        
        : <Switch>
            <Route path="/" exact component={home} />
            <Route path="/order" exact component={order} />
            <Route path="/signin" exact component={SingIn} />
            <Route path="/signup" exact component={SingUp}/>
            <Route path="/admin" exact component={SingIn}/>
            <Redirect to="/"/>  
        </Switch>
        return (
            <div>
                <HashRouter>{routes}</HashRouter>
            </div>
        );
        
    }
}

export default App;