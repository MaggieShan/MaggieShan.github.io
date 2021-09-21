import '../styles/_Socials.scss'
import variables from '../styles/_variables.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Icon(props) {
    return (
        <a className='icon' href={props.link} target="__blank">
            <FontAwesomeIcon 
                icon={props.name} 
                color={props.outline ? 'transparent' : variables.secondaryColor} 
                stroke={props.outline ? variables.secondaryColor : variables.primaryColor} 
                strokeWidth={props.outline ? 25 : 20} 
            />
        </a>
    );
}

const Socials = () => {
    return (
        <div className="social-container">
            <Icon name={faLinkedinIn} link={"https://www.linkedin.com/in/maggieshan/"} outline={true} />
            <Icon name={faGithub} link={"https://github.com/MaggieShan"} outline={true} />
            <Icon name={faCodepen} link={"https://codepen.io/maggieshan/"} />
            <Icon name={faEnvelope} link={"mailto:sshan.maggie@gmail.com"}/>
            <div className="line"></div>
        </div>
    );
}

export default Socials;