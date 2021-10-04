import React, { Component } from 'react';
import { NavItems } from "./NavItems";
import './Navbar.css'
import '../Searchbar/Searchbar.css'


class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }



    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Biru Hunt<i className="fab fa-biruhunt">
                </i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :
                'nav-menu'}>
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    } )}
                </ul>
            </nav>
        )
    }
}

export default Navbar