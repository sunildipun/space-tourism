import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="title">Space Tourism</Link>
        <ul className='menu'>
            <li>
                <Link to="/destination">Destination</Link>
            </li>
            <li>
                <Link to="/about-us">Home</Link>
            </li>
        </ul>
    </nav>
}
