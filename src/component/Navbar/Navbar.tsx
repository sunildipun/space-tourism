import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from "./../../assets/shared/logo.svg";

export default function Navbar() {
    const navArray = ['home', 'destination', 'crew', 'technology'];
    const listItems = navArray.map((item,index) =>
    // Correct! Key should be specified inside the array.
    <li className='nav-items'>
        <Link key={index} to={item}>0{index} {item}</Link>
    </li>
  );
    return <nav className="nav">
        <div className="logo">
                <Logo />
        </div>
        <ul className='menu'>
            {
                listItems
            }
        </ul>
    </nav>
}
