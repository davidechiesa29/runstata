import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FaEllipsisV } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

export default function NavBar() {
  return (
    <nav id="navigationBar">
        <div style={{display: "flex", alignItems: "center"}}>
            <Link className="pageLink" to="/"> 
            <span id="miniLogo"> RS </span>
            </Link>
            <Link className="pageLink"to="/activities">
                Activities
            </Link>
            <Link className="pageLink" to="/stats">
                Statistics
            </Link>
            <Link className="pageLink" to="/about">
                About
            </Link>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
            <Link className="pageLink" to="/account">
                <MdAccountCircle style={{fontSize: 30}}/>
            </Link>
            <Link className="pageLink" to="/settings">
                <FaEllipsisV style={{fontSize: 20}}/>
            </Link>
        </div>
    </nav>
  );
}
