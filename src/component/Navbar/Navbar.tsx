import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="title">Space Tourism</Link>
        <ul className='menu'>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/destination">Destination</Link>
            </li>
            <li>
                <Link to="/crew">Crew</Link>
            </li>
            <li>
                <Link to="/technology">Technology</Link>
            </li>
        </ul>
    </nav>
}
