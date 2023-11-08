import { Link } from 'react-router-dom';
import style from './button.module.css'

const Button = ({ title, icon, type, link, clickHandlerFn }) => {
    return (
        <button className={`btn ${ type === 'primary' ? style.primary : style.secondary}`} onClick={clickHandlerFn}>
            {
                link ? (
                    <Link to={`/${link}`} style={{ display: 'flex', alignItems: 'center', padding: '.5rem 1rem' }} >
                        <span style={{marginRight: '5px'}} >{title}</span>
                        {icon}
                    </Link>
                ) : (
                    <span style={{ display: 'flex', alignItems: 'center', padding: '.5rem 1rem' }} >
                        <span style={{marginRight: '5px'}} >{title}</span>
                        {icon}
                    </span>
                )
            }
        </button>
    );
}

export default Button;