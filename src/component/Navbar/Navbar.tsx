import './Navbar.css';
// import Logo  from './../../../src/assets/'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const navArray = ['home', 'destination', 'crew', 'technology'];
    const listItems = navArray.map((item,index) =>
    // Correct! Key should be specified inside the array.
    <li>
        <Link to="/home">0{index} {item}</Link>
    </li>
  );
    return <nav className="nav">
        <Link to="/" className="title">
            {/* <img src={Logo}/> */}
            Space Tourism
        </Link>
        <ul className='menu'>
            {
                listItems
            }
        </ul>
    </nav>
}
