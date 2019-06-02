import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            <form className="form-header" action method="POST">
                                <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas & reports..." />
                                <button className="au-btn--submit" type="submit">
                                    <i className="zmdi zmdi-search" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;