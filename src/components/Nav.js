import '../styles/_Nav.scss'
import { Link, animateScroll as scroll } from "react-scroll";

function Nav(props) {
    return (
        <div className="nav">
            <Link
                className="nav-item"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
                onSetActive={() => props.setCoinDrop(true)}
                onSetInactive={() => props.setCoinDrop(false)}
            >Projects </Link>
            <Link
                className="nav-item"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >About </Link>
            <Link
                className="nav-item"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Contact </Link>
        </div>
    );
}

export default Nav; 