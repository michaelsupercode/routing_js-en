import { Link } from "react-router-dom";
import '../App.css';


const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/gal">Gallery</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;