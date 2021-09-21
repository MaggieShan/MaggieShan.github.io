import '../styles/_Nav.scss'
import { Link } from "react-scroll";

function Nav(props) {
    return (
        <div className="navi">
            <Link
                className="navi-item"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
            >Projects </Link>
            {/* <Link
                className="navi-item"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
            >About </Link> */}
            <a href="https://drive.google.com/file/d/1Xz4zFIJFhgtQrrcN2ukN8Lr7R3g94lPs/view?usp=sharing" className="navi-item" target="__blank">About</a>
        </div>
    );
}

export default Nav; 