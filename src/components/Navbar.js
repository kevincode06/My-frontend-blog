import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Updated path to go one level up

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><Link to="/">New Trend Fashion</Link></h1> {/* Added Link here */}
      <ul>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/postdetail">Post Detail</Link> </li>
        <li><Link to="/postblog">Post Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
        <li className="auth-links">
          <Link to="/login">Login</Link>
          <Link to="/signup" className="signup">Sign Up</Link>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
