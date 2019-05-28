import React, { Component } from "react";
import { connect } from "react-redux";
import SingIn from './containers/SingIn'
import SingUp from './containers/SingUp'
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
import './assets/vendor/select2/select2.min.css'
import './assets/css/main.css'
import './assets/css/util.css'

// import './assets/vendor/animsition/js/animsition.js'
// import './assets/vendor/bootstrap/js/popper.js'
// import './assets/vendor/bootstrap/js/bootstrap.min.js'
// import './assets/vendor/jquery/jquery-3.2.1.min.js'
// import './assets/vendor/select2/select2.min.js'
// import './assets/vendor/daterangepicker/moment.min.js'
// import './assets/vendor/daterangepicker/daterangepicker.js'
// import './assets/vendor/countdowntime/countdowntime.js'
// import './assets/js/main.js'`


class App extends Component {
    render() {
        let routes = (<Switch>
                        <Route path="/signin" render={() => <SingIn/>} />
                        <Route path="/signup" component={SingUp}></Route>
                        <Redirect to="/signin" />
                    </Switch>
                )
        return (
            <div>
                <HashRouter>{routes}</HashRouter>
            </div>
        );
        
    }
}

export default App;