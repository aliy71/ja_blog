import { Link } from 'react-router-dom';
import style from './button.module.css'

const Button = ({ title, icon, type, link, disabled=false, clickHandlerFn }) => {
    return (
        <button 
            disabled={disabled} 
            className={`btn 
                ${ type === 'primary' ? style.primary : type === 'secondary' ? style.secondary : style.icon__btn }
            `} 
            onClick={clickHandlerFn}>
            {
                link ? (
                    <Link to={`/${link}`} style={{ display: 'flex', alignItems: 'center', padding: '.5rem 1rem' }} >
                        {title.length > 0 ? <span>{title}</span> : ''}
                        {icon}
                    </Link>
                ) : (
                    <span style={{ display: 'flex', alignItems: 'center', padding: '.5rem 1rem' }} >
                        {title ? <span>{title}</span> : ''}
                        {icon}
                    </span>
                )
            }
        </button>
    );
}

export default Button;