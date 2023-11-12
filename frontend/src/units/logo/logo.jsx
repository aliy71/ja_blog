import { Link } from 'react-router-dom';
import styles from './logo.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to={'/'}>
                J
                <span>A</span>
            </Link>
        </div>
    );
}

export default Logo;