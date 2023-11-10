/** @format */ import { Link } from 'react-router-dom';
import styles from './link.module.css';

const LinkApp = ({ title, link }) => {
    console.log();
    return (
        <Link
            className={styles.link}
            to={`/${link}`}

            style={{ fontSize: '.8rem' }}>
            {title}
        </Link>
    );
};

export default LinkApp;
