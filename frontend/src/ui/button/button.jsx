import { Link } from 'react-router-dom';
import style from './button.module.css'

const Button = ({ title, icon, type }) => {
    return (
        <button className={`btn ${ type === 'primary' ? style.primary : style.secondary}`}>
            <Link to={'/blogs'} style={{ display: 'flex', padding: '.5rem 1rem' }} >
                <span style={{marginRight: '5px'}} >{title}</span>
                {icon}
            </Link>
        </button>
    );
}

export default Button;