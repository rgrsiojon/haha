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
import './App.css'

import Cookies from 'universal-cookie';
import SingIn from './containers/SingIn'
import SingUp from './containers/SingUp'
import Admin from './containers/Admin'
import Users from './containers/Admin/Users'
import Home from './containers/Home'
import TabbarAdmin from './hoc/layout/TabbarAdmin'
import { PAGE } from './Common'
import Loading from './components/Loading'

// MARK: Product
import CreateProduct from './containers/Admin/CreateProduct'
import UpdateProduct from './containers/Admin/UpdateProduct'

import Header from './hoc/layout/Header'
import Checkout from  './components/Checkout'
import Cart from  './containers/Cart'
import Shop from  './components/Shop'
import ProductDetails from  './components/Product-details'
import Contact from './components/Contact'
import Login from  './containers/Login'
import BlogSingle from './containers/Blog-single'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    HashRouter
} from "react-router-dom";
import Profile from "./containers/Profile";

const cookies = new Cookies();

class App extends Component {
    render() {
        let { loading } = this.props.auth
        var auth = cookies.get('auth')
        var admin_cookies = cookies.get('admin')
        //@ Admin
        let admin = () => <TabbarAdmin> <Admin/> </TabbarAdmin>
        let create_product = () => <TabbarAdmin> <CreateProduct/> </TabbarAdmin>
        let update_product = ({ match }) => <TabbarAdmin> <UpdateProduct id={match.params.id}/> </TabbarAdmin>
        let users = () => <TabbarAdmin> <Users/> </TabbarAdmin>
        //@ Guest 
        let home = () => <Header><Home/></Header>
        let checkout = () => <Header><Checkout/></Header>
        let cart = () => <Header><Cart/></Header>
        let shop = () => <Header><Shop/></Header>
        let product_details = () => <Header><ProductDetails/></Header>
        let contact_us = () => <Header><Contact/></Header>
        let login = () => <Header><Login/></Header>
        let blog_single = ({ match }) => <Header><BlogSingle id={match.params.id}/></Header>
        let profile = () => <Header> <Profile></Profile></Header>
        let routes = auth !== undefined
        ?
            <Switch>
                <Route path="/" exact component={home} />
                <Route path="/checkout" exact component={checkout} />
                <Route path="/cart" exact component={cart} />
                <Route path="/profile" exact component={profile} />
                <Route path="/shop" exact component={shop} />
                <Route path="/product-details" exact component={product_details} />
                <Route path="/login" exact component={profile} />
                <Route path="/contact-us" exact component={contact_us} />
                <Route path="/product/macbook/:id" exact component={blog_single}></Route>
                <Redirect to="/login"/>
            </Switch> 
        
        : <Switch>
            <Route path="/" exact component={home} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/cart" exact component={login} />

            <Route path="/profile" exact component={login} />

            <Route path="/product-details" exact component={ProductDetails} />
            <Route path="/login" exact component={login} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/product/macbook/:id" exact component={blog_single}></Route>

            <Route path="/admin" exact component={SingIn}/>
            <Redirect to="/"/>  
        </Switch>
        
        routes = admin_cookies !== undefined 
        ? <Switch>
            <Route path="/admin" exact component={admin}/>
            <Route path="/admin/users" exact component={users}/>
            <Route path="/admin/product/macbook/create-product" exact component={create_product}></Route>
            <Route path="/admin/product/macbook/update-product/:id" exact component={update_product}></Route>
            <Redirect to="/admin"/>
        </Switch> 
        : routes

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