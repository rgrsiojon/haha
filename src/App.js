import React, { Component } from "react";
import { connect } from "react-redux";

// import './../../assets/vendor/bootstrap/css/bootstrap.min.css'  
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

import Cookies from 'universal-cookie';
import SingIn from './containers/SingIn'
import SingUp from './containers/SingUp'
import Admin from './containers/Admin'
import Home from './containers/Home'
import TabbarAdmin from './hoc/layout/TabbarAdmin'
import Tabbar from './containers/Tabbar'
import Order from './containers/Order'
import { PAGE } from './Common'
import Loading from './components/Loading'

// MARK: Product
import CreateProduct from './containers/Admin/CreateProduct'
import UpdateProduct from './containers/Admin/UpdateProduct'

import DemoHome from  './components/Demo/Home'
import Checkout from  './components/Demo/Checkout'
import Cart from  './components/Demo/Cart'
import Shop from  './components/Demo/Shop'
import ProductDetails from  './components/Demo/Product-details'
import Contact from './components/Demo/Contact'
import Login from  './components/Demo/Login'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    HashRouter
} from "react-router-dom";

const cookies = new Cookies();

class App extends Component {
    render() {
        let { loading } = this.props.auth
        var auth = cookies.get('auth')
        let home = () => <Tabbar page = {PAGE.HOME}><Home/></Tabbar>
        let admin = () => <TabbarAdmin> <Admin/> </TabbarAdmin>
        let create_product = () => <TabbarAdmin> <CreateProduct/> </TabbarAdmin>
        let update_product = () => <TabbarAdmin> <UpdateProduct/> </TabbarAdmin>
        let order = () => <Tabbar page = {PAGE.ORDER}><Order/></Tabbar>
        let routes = auth !== undefined
        ?
            <Switch>
                <Route path="/" exact component={home} />
                <Route path="/admin" exact component={admin}/>
                <Route path="/admin/create-product" exact component={create_product}></Route>
                <Route path="/admin/update-product/:id" exact component={update_product}></Route>
                {/* <Redirect to="/admin"/> */}
            </Switch> 
        
        : <Switch>
            <Route path="/" exact component={home} />
            <Route path="/demo-home" exact component={DemoHome} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/product-details" exact component={ProductDetails} />
            <Route path="/login" exact component={Login} />
            <Route path="/contact-us" exact component={Contact} />

            <Route path="/order" exact component={order} />
            <Route path="/signin" exact component={SingIn} />
            <Route path="/signup" exact component={SingUp}/>
            <Route path="/admin" exact component={SingIn}/>
            <Redirect to="/"/>  
        </Switch>
        return (
            <div>
                {
                    loading ? <Loading/> : <HashRouter>{routes}</HashRouter>
                }
                
            </div>
        );
        
    }
}

export default connect( state => {
    return {
        auth: state.auth
    }
})(App);